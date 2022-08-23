import type { ParameterObject, ParameterLocation } from 'openapi3-ts';

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
