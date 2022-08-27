/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
