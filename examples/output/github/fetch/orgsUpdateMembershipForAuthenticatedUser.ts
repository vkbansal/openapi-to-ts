export interface OrgsUpdateMembershipForAuthenticatedUserPathParams {
	org: string;
}

export interface OrgsUpdateMembershipForAuthenticatedUserRequestBody {
	/**
	 * The state that the membership should be in. Only `"active"` will be accepted.
	 */
	state: 'active';
}

export interface OrgsUpdateMembershipForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsUpdateMembershipForAuthenticatedUserPathParams {
	body: OrgsUpdateMembershipForAuthenticatedUserRequestBody;
}

export async function orgsUpdateMembershipForAuthenticatedUser(
	props: OrgsUpdateMembershipForAuthenticatedUserProps,
) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/user/memberships/orgs/${org}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
