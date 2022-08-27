export interface OrgsBlockUserPathParams {
	org: string;
	username: string;
}

export interface OrgsBlockUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsBlockUserPathParams {}

export async function orgsBlockUser(props: OrgsBlockUserProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/blocks/${username}`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
