export interface OrgsCheckPublicMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface OrgsCheckPublicMembershipForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsCheckPublicMembershipForUserPathParams {}

export async function orgsCheckPublicMembershipForUser(
	props: OrgsCheckPublicMembershipForUserProps,
) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/public_members/${username}`, {
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
