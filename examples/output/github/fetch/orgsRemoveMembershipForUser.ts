export interface OrgsRemoveMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface OrgsRemoveMembershipForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsRemoveMembershipForUserPathParams {}

export async function orgsRemoveMembershipForUser(props: OrgsRemoveMembershipForUserProps) {
	const { org, username, ...rest } = props;

	const response = await fetch(`/orgs/${org}/memberships/${username}`, {
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
