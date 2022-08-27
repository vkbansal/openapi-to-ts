export interface CodesOfConductGetAllCodesOfConductProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function codesOfConductGetAllCodesOfConduct(
	props: CodesOfConductGetAllCodesOfConductProps,
) {
	const { ...rest } = props;

	const response = await fetch(`/codes_of_conduct`, {
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
