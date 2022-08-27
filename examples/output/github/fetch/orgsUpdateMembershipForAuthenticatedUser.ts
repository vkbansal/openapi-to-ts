/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface OrgsUpdateMembershipForAuthenticatedUserPathParams {
	org: string;
}

export interface OrgsUpdateMembershipForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsUpdateMembershipForAuthenticatedUserPathParams {}

export async function orgsUpdateMembershipForAuthenticatedUser(
	props: OrgsUpdateMembershipForAuthenticatedUserProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/user/memberships/orgs/${org}`, {
		method: 'PATCH',
		...rest,
	});

	const json = await response.json();

	return json;
}