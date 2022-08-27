export interface OrgsUnblockUserPathParams {
	org: string;
	username: string;
}

export interface OrgsUnblockUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsUnblockUserPathParams {}

export async function orgsUnblockUser(props: OrgsUnblockUserProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/blocks/${username}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
