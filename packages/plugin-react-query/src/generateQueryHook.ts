import type { OperationObject, ParameterLocation, ParameterObject } from 'openapi3-ts';
import type { CodeOutput } from '@oa2ts/cli/plugin';
import { getNameForType } from '@oa2ts/cli/nameHelpers';

export interface GenerateQueryHookProps {
	route: string;
	verb: string;
	operation: OperationObject;
	params: Record<ParameterLocation, ParameterObject[]>;
}

export function generateQueryHook(
	props: GenerateQueryHookProps,
	indexInclude: string[],
): CodeOutput {
	const { route, verb, operation, params } = props;
	const { path } = params;
	const pathParams = path.map((p) => p.name);
	const dependencies = [`"${operation.operationId}"`, ...pathParams];
	// check for operationId
	if (!operation.operationId) {
		throw new Error(`Every path must have a operationId - No operationId set for ${verb} ${route}`);
	}

	const typeName = getNameForType(operation.operationId);
	const name = `use${typeName}Query`;
	const hookPropsName = `Use${typeName}QueryProps`;

	indexInclude.push(`export { ${name} } from './hooks/${name}';`);

	return {
		code: [
			`import { useQuery } from "@tanstack/react-query";`,
			``,
			`export interface ${hookPropsName} {`,
			...path.map((p) => `"${p.name}": ${p.schema ? 'string' : 'string'};`),
			`}`,
			``,
			`export function ${name}(props: ${hookPropsName}) {`,
			`  const { ${pathParams.join(', ')} } = props`,
			`  return useQuery([${dependencies.join(', ')}]);`,
			`}`,
		].join('\n'),
		file: `hooks/${name}.ts`,
	};
}
