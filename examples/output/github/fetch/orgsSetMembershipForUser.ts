/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface OrgsSetMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface OrgsSetMembershipForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsSetMembershipForUserPathParams {}

export async function orgsSetMembershipForUser(props: OrgsSetMembershipForUserProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/memberships/${username}`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}