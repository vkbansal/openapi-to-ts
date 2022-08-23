import type {
	OpenAPIObject,
	ParameterObject,
	ParameterLocation,
	PathItemObject,
	OperationObject,
} from 'openapi3-ts';
import { isReferenceObject } from './codegen.js';

const ALLOWED_VERBS: Array<keyof PathItemObject> = ['get', 'post', 'put', 'delete', 'patch'];

export function getParamsInPath(path: string): string[] {
	let n;
	const output = [];
	const templatePathRegex = /{(\w+?)}/g;

	while ((n = templatePathRegex.exec(path)) !== null) {
		output.push(n[1]);
	}

	return output;
}

export function groupByParamType(
	params: ParameterObject[],
): Record<ParameterLocation, ParameterObject[]> {
	const data: Record<ParameterLocation, ParameterObject[]> = {
		query: [],
		header: [],
		path: [],
		cookie: [],
	};

	return params.reduce((p, c) => {
		if (p[c.in]) {
			p[c.in].push(c);
		}

		return p;
	}, data);
}

export function processPaths(
	spec: OpenAPIObject,
	callback: (
		route: string,
		verb: string,
		operation: OperationObject,
		params: Record<ParameterLocation, ParameterObject[]>,
	) => void,
): void {
	const operationIds = new Set<string>();
	Object.entries(spec.paths || {}).forEach(([route, routeObj]: [string, PathItemObject]) => {
		ALLOWED_VERBS.forEach((verb) => {
			const operation = routeObj[verb] as OperationObject;

			if (!operation) return;

			// check for operationId
			if (!operation.operationId) {
				throw new Error(
					`Every path must have a operationId - No operationId set for ${verb} ${route}`,
				);
			}

			// check if operationId is already used
			if (operationIds.has(operation.operationId)) {
				throw new Error(`"${operation.operationId}" is duplicated in your schema definition!`);
			}

			// mark operationId as used
			operationIds.add(operation.operationId);

			const paramsInPath = getParamsInPath(route);

			const resolvedParams = [...(routeObj.parameters || []), ...(operation.parameters || [])]
				.map((param) => {
					if (isReferenceObject(param)) {
						// const ref = param.$ref.replace('#/components/parameters/', '');
						// if (spec.components && ref in spec.components) {
						// 	return spec.components[ref];
						// }

						throw new Error(`This version of plugin does not support parameter refs`);
					}

					return param;
				})
				.filter((p) => p);

			const groupedParams = groupByParamType(resolvedParams);

			// check for path params definitions
			paramsInPath.forEach((pathParam) => {
				const paramDef = groupedParams.path.find((p) => p.name === pathParam);

				if (!paramDef) {
					throw new Error(`Could not find parameter definition for ${pathParam} in ${route}`);
				}
			});

			callback(route, verb, operation, groupedParams);
		});
	});
}
