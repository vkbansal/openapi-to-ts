export interface CodesOfConductGetConductCodePathParams {
	key: string;
}

export interface CodesOfConductGetConductCodeProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodesOfConductGetConductCodePathParams {}

export async function codesOfConductGetConductCode(props: CodesOfConductGetConductCodeProps) {
	const { key, ...rest } = props;

	const response = await fetch(`/codes_of_conduct/${key}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
