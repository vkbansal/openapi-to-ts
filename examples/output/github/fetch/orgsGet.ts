export interface OrgsGetPathParams {
	org: string;
}

export interface OrgsGetProps extends Omit<RequestInit, 'method' | 'body'>, OrgsGetPathParams {}

export async function orgsGet(props: OrgsGetProps) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}`, {
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
