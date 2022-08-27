export interface SearchIssuesAndPullRequestsQueryParams {
	q: string;
	sort?:
		| 'comments'
		| 'created'
		| 'interactions'
		| 'reactions'
		| 'reactions-+1'
		| 'reactions--1'
		| 'reactions-heart'
		| 'reactions-smile'
		| 'reactions-tada'
		| 'reactions-thinking_face'
		| 'updated';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface SearchIssuesAndPullRequestsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchIssuesAndPullRequestsQueryParams;
}

export async function searchIssuesAndPullRequests(props: SearchIssuesAndPullRequestsProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/search/issues`, {
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
