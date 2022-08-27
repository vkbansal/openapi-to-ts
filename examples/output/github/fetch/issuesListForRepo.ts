export interface IssuesListForRepoQueryParams {
	milestone?: string;
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	assignee?: string;
	creator?: string;
	mentioned?: string;
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

export interface IssuesListForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListForRepoPathParams {
	queryParams: IssuesListForRepoQueryParams;
}

export async function issuesListForRepo(props: IssuesListForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues`, {
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
