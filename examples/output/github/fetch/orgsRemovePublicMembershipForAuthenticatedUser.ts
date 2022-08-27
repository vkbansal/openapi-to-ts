export interface OrgsRemovePublicMembershipForAuthenticatedUserPathParams {
	org: string;
	username: string;
}

export interface OrgsRemovePublicMembershipForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsRemovePublicMembershipForAuthenticatedUserPathParams {}

export async function orgsRemovePublicMembershipForAuthenticatedUser(
	props: OrgsRemovePublicMembershipForAuthenticatedUserProps,
) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/public_members/${username}`, {
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
