export interface OrgsSetMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface OrgsSetMembershipForUserRequestBody {
	/**
	 * The role to give the user in the organization. Can be one of:
	 * \* `admin` - The user will become an owner of the organization.
	 * \* `member` - The user will become a non-owner member of the organization.
	 * @default "member"
	 */
	role?: 'admin' | 'member';
}

export interface OrgsSetMembershipForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsSetMembershipForUserPathParams {
	body: OrgsSetMembershipForUserRequestBody;
}

export async function orgsSetMembershipForUser(props: OrgsSetMembershipForUserProps) {
	const { org, username, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/memberships/${username}`, {
		method: 'PUT',
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
