export interface OrgsCheckBlockedUserPathParams {
	org: string;
	username: string;
}

export interface OrgsCheckBlockedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsCheckBlockedUserPathParams {}

export async function orgsCheckBlockedUser(props: OrgsCheckBlockedUserProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/blocks/${username}`, {
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
