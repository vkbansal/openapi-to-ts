export interface OrgsListMembershipsForAuthenticatedUserQueryParams {
	state?: 'active' | 'pending';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListMembershipsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: OrgsListMembershipsForAuthenticatedUserQueryParams;
}

export async function orgsListMembershipsForAuthenticatedUser(
	props: OrgsListMembershipsForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/memberships/orgs`, {
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
