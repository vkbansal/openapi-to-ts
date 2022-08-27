export interface IssuesListEventsForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListEventsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListEventsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListEventsForRepoPathParams {
	queryParams: IssuesListEventsForRepoQueryParams;
}

export async function issuesListEventsForRepo(props: IssuesListEventsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/events`, {
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
