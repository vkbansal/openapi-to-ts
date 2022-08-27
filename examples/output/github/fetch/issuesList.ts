export interface IssuesListQueryParams {
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
	collab?: boolean;
	orgs?: boolean;
	owned?: boolean;
	pulls?: boolean;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: IssuesListQueryParams;
}

export async function issuesList(props: IssuesListProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/issues`, {
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
