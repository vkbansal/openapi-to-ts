import type {
	OpenAPIObject,
	OperationObject,
	ParameterLocation,
	ParameterObject,
} from 'openapi3-ts';
import type { PluginReturn, CodeOutput } from '@oa2ts/cli/plugin';
import { processPaths } from '@oa2ts/cli/pathHelpers';
import { getNameForType } from '@oa2ts/cli/nameHelpers';
import { createQueryParamsInterface, createPathParamsInterface } from '@oa2ts/cli/codegen';
import { camelCase } from 'camel-case';

export interface GenerateFetchCodeProps {
	route: string;
	verb: string;
	operation: OperationObject;
	params: Record<ParameterLocation, ParameterObject[]>;
}

const REST_PARAM = '...rest';

function generateFetchCode(props: GenerateFetchCodeProps, indexIncludes: string[]): CodeOutput {
	const { route, verb, operation, params } = props;

	const code: string[] = [];
	const imports: string[] = [];

	// check for operationId
	if (!operation.operationId) {
		throw new Error(`Every path must have a operationId - No operationId set for ${verb} ${route}`);
	}

	const hasQueryParams = params.query.length > 0;
	const queryParams = createQueryParamsInterface(operation.operationId, params.query);
	const pathParams = createPathParamsInterface(operation.operationId, params.path);

	if (hasQueryParams) {
		code.push(queryParams.code, ``);
		imports.push(...queryParams.imports);
	}

	const name = camelCase(operation.operationId);
	const typeName = getNameForType(operation.operationId);
	const propsName = `${typeName}Props`;
	const spreadParams: string[] = [];
	const extensions: string[] = [`Omit<RequestInit, 'method' | 'body'>`];

	if (params.path.length > 0) {
		code.push(pathParams.code, ``);
		imports.push(...pathParams.imports);
		extensions.push(pathParams.name);
		params.path.forEach((param) => {
			spreadParams.push(param.name);
		});
	}

	code.push(`export interface ${propsName} extends ${extensions.join(', ')} {`);

	if (hasQueryParams) {
		const paramName = 'queryParams';
		spreadParams.push(paramName);
		code.push(`  ${paramName}: ${queryParams.name};`);
	}

	code.push(`}`, ``);
	spreadParams.push(REST_PARAM);

	code.push(
		``,
		`export async function ${name} (props: ${propsName}) {`,
		`  const { ${spreadParams.join(', ')} } = props;`,
		``,
		`  const response = await fetch( \`${route.replace(/\{/g, '${')}\` ,{`,
		`    method: "${verb.toUpperCase()}",`,
		`    ${REST_PARAM}`,
		`  })`,
		``,
		// `  if (!response.ok) {`,
		// `    return Promise.reject();`,
		// `  }`,
		// ``,
		`  const json = await response.json()`,
		``,
		`  return json`,
		`}`,
	);

	indexIncludes.push(`export { ${name} } from './fetch/${name}.ts'`);

	return { code: code.join('\n'), file: `./fetch/${name}.ts` };
}

export function generateFetchCalls(): (spec: OpenAPIObject) => Promise<PluginReturn> {
	return async (spec: OpenAPIObject): Promise<PluginReturn> => {
		const files: CodeOutput[] = [];
		const includes: string[] = [];

		processPaths(spec, (route, verb, operation, params) => {
			// check for operationId
			if (!operation.operationId) {
				throw new Error(
					`Every path must have a operationId - No operationId set for ${verb} ${route}`,
				);
			}

			files.push(generateFetchCode({ route, verb, operation, params }, includes));
		});

		return { files, indexInclude: includes.join('\n') };
	};
}
