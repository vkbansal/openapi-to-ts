export interface OrgsListMembersQueryParams {
	/**
	 * @default "all"
	 */
	filter?: '2fa_disabled' | 'all';
	/**
	 * @default "all"
	 */
	role?: 'admin' | 'all' | 'member';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListMembersPathParams {
	org: string;
}

export interface OrgsListMembersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListMembersPathParams {
	queryParams: OrgsListMembersQueryParams;
}

export async function orgsListMembers(props: OrgsListMembersProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/members`, {
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
