import type { OperationObject, ParameterLocation, ParameterObject } from 'openapi3-ts';
import { camelCase } from 'camel-case';

import type { CodeOutput } from '@oa2ts/cli/plugin';
import type { Codegen, ObjectProps } from '@oa2ts/cli/codegen';
import {
	getNameForType,
	getNameForPathParams,
	getNameForQueryParams,
} from '@oa2ts/cli/nameHelpers';
// import { isReferenceObject } from '@oa2ts/cli/helpers';

export interface GenerateFetchCodeProps {
	route: string;
	verb: string;
	operation: OperationObject;
	params: Record<ParameterLocation, ParameterObject[]>;
}

// const REST_PARAM = '...rest';
// const METHODS_WITH_BODY = ['post', 'put', 'patch'];

export function generateFetchCode(
	props: GenerateFetchCodeProps,
	indexIncludes: string[],
	codegen: Codegen,
): CodeOutput {
	const { route, verb, operation, params } = props;
	const imports = new Set<string>();

	// check for operationId
	if (!operation.operationId) {
		throw new Error(`Every path must have a operationId - No operationId set for ${verb} ${route}`);
	}

	const fnName = camelCase(operation.operationId);
	const typeName = getNameForType(operation.operationId);
	const propsName = `${typeName}Props`;

	// if (METHODS_WITH_BODY.includes(verb) && operation.requestBody) {
	// 	if (isReferenceObject(operation.requestBody)) {
	// 		//
	// 	} else {
	// 		const mediaObj =
	// 			operation.requestBody.content['application/json'] ||
	// 			operation.requestBody.content['default'];

	// 		if (mediaObj && mediaObj.schema) {
	// 			hasBody = true;
	// 			const bodyCode = isReferenceObject(mediaObj.schema)
	// 				? codegen.createTypeDeclaration(requestBodyName, mediaObj.schema)
	// 				: codegen.createInterface(requestBodyName, mediaObj.schema);

	// 			if (bodyCode.code) {
	// 				code.push(bodyCode.code, ``);
	// 				// imports.push(...bodyCode.imports);
	// 			}
	// 		}
	// 	}
	// }

	// if (hasBody) {
	// 	const paramName = 'body';
	// 	spreadParams.push(paramName);
	// 	code.push(`  ${paramName}: ${requestBodyName};`);
	// }

	const code = codegen.renderTemplate('fetch.liquid', {
		fnName,
		route,
		verb,
		operation,
		params,
		propsName,
		pathParams: {
			name: getNameForPathParams(operation.operationId),
			props: params.path.map(
				(param): ObjectProps => ({
					key: param.name,
					value: param.schema ? codegen.resolveValue(param.schema, imports) : 'unknown',
					comment: codegen.renderTemplate('comments.liquid', { schema: param.schema }),
					required: true,
				}),
			),
		},
		queryParams: {
			name: getNameForQueryParams(operation.operationId),
			props: params.query.map(
				(param): ObjectProps => ({
					key: param.name,
					value: param.schema ? codegen.resolveValue(param.schema, imports) : 'unknown',
					comment: codegen.renderTemplate('comments.liquid', { schema: param.schema }),
					required: !!param.required,
				}),
			),
		},
	});
	indexIncludes.push(`export { ${fnName} } from './fetch/${fnName}'`);

	return {
		code: codegen.renderTemplate('codeWithImports.liquid', { imports, code }),
		file: `./fetch/${fnName}.ts`,
	};
}
