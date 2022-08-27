export interface OrgsSetPublicMembershipForAuthenticatedUserPathParams {
	org: string;
	username: string;
}

export interface OrgsSetPublicMembershipForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsSetPublicMembershipForAuthenticatedUserPathParams {}

export async function orgsSetPublicMembershipForAuthenticatedUser(
	props: OrgsSetPublicMembershipForAuthenticatedUserProps,
) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/public_members/${username}`, {
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
