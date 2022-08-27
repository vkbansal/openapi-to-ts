import type { OperationObject, ParameterLocation, ParameterObject } from 'openapi3-ts';
import type { CodeOutput } from '@oa2ts/cli/plugin';
import { getNameForType } from '@oa2ts/cli/nameHelpers';
import { createQueryParamsInterface, createPathParamsInterface } from '@oa2ts/cli/codegen';

export interface GenerateQueryHookProps {
	route: string;
	verb: string;
	operation: OperationObject;
	params: Record<ParameterLocation, ParameterObject[]>;
}

// const REST_PARAM = '...rest';

export function generateQueryHook(
	props: GenerateQueryHookProps,
	indexInclude: string[],
): CodeOutput {
	const { route, verb, operation, params } = props;
	// check for operationId
	if (!operation.operationId) {
		throw new Error(`Every path must have a operationId - No operationId set for ${verb} ${route}`);
	}

	const typeName = getNameForType(operation.operationId);
	const hookName = `use${typeName}Query`;
	const hookPropsName = `Use${typeName}QueryProps`;
	const hasQueryParams = params.query.length > 0;
	const hasPathParams = params.path.length > 0;
	const queryParams = createQueryParamsInterface(operation.operationId, params.query);
	const pathParams = createPathParamsInterface(operation.operationId, params.path);
	const extensions: string[] = [];
	const queryDependencies = [JSON.stringify(operation.operationId)];
	const code: string[] = [];
	const imports: string[] = [`import { useQuery } from "@tanstack/react-query";`];
	const spreadParams: string[] = [];

	indexInclude.push(`export { ${hookName} } from './hooks/${hookName}';`);

	if (hasPathParams) {
		code.push(pathParams.code, ``);
		imports.push(...pathParams.imports);
		extensions.push(pathParams.name);
		params.path.forEach((param) => {
			spreadParams.push(param.name);
			queryDependencies.push(param.name);
		});
	}

	if (hasQueryParams) {
		code.push(queryParams.code, ``);
		imports.push(...queryParams.imports);
	}

	code.push(
		`export interface ${hookPropsName}`,
		extensions.length > 0 ? `  extends ${extensions.join(', ')}` : '',
		`{`,
	);

	if (hasQueryParams) {
		const paramName = 'queryParams';
		spreadParams.push(paramName);
		code.push(`  ${paramName}: ${queryParams.name};`);
		queryDependencies.push(paramName);
	}

	code.push(`}`, ``);
	// spreadParams.push(REST_PARAM);

	code.push(
		`export function ${hookName}(props: ${hookPropsName}) {`,
		`  const { ${spreadParams.join(', ')} } = props`,
		``,
		`  return useQuery([${queryDependencies.join(', ')}]);`,
		`}`,
	);

	return {
		code: [...imports, ...code].join('\n'),
		file: `hooks/${hookName}.ts`,
	};
}

/**
 *
 * [

			...path.map((p) => `"${p.name}": ${p.schema ? 'string' : 'string'};`),
			`}`,
			``,

			`

			`}`,
		]
 */
