import type { OperationObject, ParameterLocation, ParameterObject } from 'openapi3-ts';
import type { CodeOutput } from '@oa2ts/cli/plugin';
import { getNameForType } from '@oa2ts/cli/nameHelpers';

export interface GenerateMutationHookProps {
	route: string;
	verb: string;
	operation: OperationObject;
	params: Record<ParameterLocation, ParameterObject[]>;
}

export function generateMutationHook(
	props: GenerateMutationHookProps,
	indexInclude: string[],
): CodeOutput {
	const { route, verb, operation } = props;
	// const { path } = params;
	// const pathParams = path.map((p) => p.name);
	// const dependencies = [`"${operation.operationId}"`, ...pathParams];

	// check for operationId
	if (!operation.operationId) {
		throw new Error(`Every path must have a operationId - No operationId set for ${verb} ${route}`);
	}

	const name = `use${getNameForType(operation.operationId)}Mutation`;

	indexInclude.push(`export { ${name} } from './hooks/${name}';`);

	return {
		code: [
			`import { useMutation } from "@tanstack/react-query";`,
			``,
			`export function ${name}() {`,
			`  return useMutation();`,
			`}`,
		].join('\n'),
		file: `hooks/${name}.ts`,
	};
}
