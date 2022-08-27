export interface OrgsListPublicMembersQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListPublicMembersPathParams {
	org: string;
}

export interface OrgsListPublicMembersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListPublicMembersPathParams {
	queryParams: OrgsListPublicMembersQueryParams;
}

export async function orgsListPublicMembers(props: OrgsListPublicMembersProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/public_members`, {
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
