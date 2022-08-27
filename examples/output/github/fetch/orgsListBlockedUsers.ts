export interface OrgsListBlockedUsersPathParams {
	org: string;
}

export interface OrgsListBlockedUsersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListBlockedUsersPathParams {}

export async function orgsListBlockedUsers(props: OrgsListBlockedUsersProps) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/blocks`, {
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
