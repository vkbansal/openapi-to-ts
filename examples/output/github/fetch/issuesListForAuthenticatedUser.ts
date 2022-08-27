export interface IssuesListForAuthenticatedUserQueryParams {
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

export interface IssuesListForAuthenticatedUserProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: IssuesListForAuthenticatedUserQueryParams;
}

export async function issuesListForAuthenticatedUser(props: IssuesListForAuthenticatedUserProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/issues`, {
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
