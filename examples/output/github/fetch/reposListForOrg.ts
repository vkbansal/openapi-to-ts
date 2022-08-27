export interface ReposListForOrgQueryParams {
	type?: 'all' | 'forks' | 'internal' | 'member' | 'private' | 'public' | 'sources';
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'full_name' | 'pushed' | 'updated';
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListForOrgPathParams {
	org: string;
}

export interface ReposListForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListForOrgPathParams {
	queryParams: ReposListForOrgQueryParams;
}

export async function reposListForOrg(props: ReposListForOrgProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/repos`, {
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
