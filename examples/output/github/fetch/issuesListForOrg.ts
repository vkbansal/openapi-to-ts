export interface IssuesListForOrgQueryParams {
	/**
	 * @default "assigned"
	 */
	filter?: 'all' | 'assigned' | 'created' | 'mentioned' | 'repos' | 'subscribed';
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	labels?: string;
	/**
	 * @default "created"
	 */
	sort?: 'comments' | 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListForOrgPathParams {
	org: string;
}

export interface IssuesListForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListForOrgPathParams {
	queryParams: IssuesListForOrgQueryParams;
}

export async function issuesListForOrg(props: IssuesListForOrgProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/issues`, {
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
