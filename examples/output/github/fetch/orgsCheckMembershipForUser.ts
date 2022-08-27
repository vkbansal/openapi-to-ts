export interface OrgsCheckMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface OrgsCheckMembershipForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsCheckMembershipForUserPathParams {}

export async function orgsCheckMembershipForUser(props: OrgsCheckMembershipForUserProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/members/${username}`, {
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
