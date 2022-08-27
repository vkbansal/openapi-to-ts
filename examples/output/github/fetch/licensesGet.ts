export interface LicensesGetPathParams {
	license: string;
}

export interface LicensesGetProps
	extends Omit<RequestInit, 'method' | 'body'>,
		LicensesGetPathParams {}

export async function licensesGet(props: LicensesGetProps) {
	const { license, ...rest } = props;

	const response = await fetch(`/licenses/${license}`, {
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
