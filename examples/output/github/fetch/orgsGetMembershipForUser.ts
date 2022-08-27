export interface OrgsGetMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface OrgsGetMembershipForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsGetMembershipForUserPathParams {}

export async function orgsGetMembershipForUser(props: OrgsGetMembershipForUserProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/memberships/${username}`, {
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
