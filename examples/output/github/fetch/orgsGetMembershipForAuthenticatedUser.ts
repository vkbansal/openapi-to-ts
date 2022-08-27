export interface OrgsGetMembershipForAuthenticatedUserPathParams {
	org: string;
}

export interface OrgsGetMembershipForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsGetMembershipForAuthenticatedUserPathParams {}

export async function orgsGetMembershipForAuthenticatedUser(
	props: OrgsGetMembershipForAuthenticatedUserProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/user/memberships/orgs/${org}`, {
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
