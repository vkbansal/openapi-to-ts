export interface IssuesListMilestonesQueryParams {
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	/**
	 * @default "due_on"
	 */
	sort?: 'completeness' | 'due_on';
	/**
	 * @default "asc"
	 */
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

export interface IssuesListMilestonesPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListMilestonesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListMilestonesPathParams {
	queryParams: IssuesListMilestonesQueryParams;
}

export async function issuesListMilestones(props: IssuesListMilestonesProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/milestones`, {
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
