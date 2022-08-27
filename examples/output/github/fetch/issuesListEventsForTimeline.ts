export interface IssuesListEventsForTimelineQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListEventsForTimelinePathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListEventsForTimelineProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListEventsForTimelinePathParams {
	queryParams: IssuesListEventsForTimelineQueryParams;
}

export async function issuesListEventsForTimeline(props: IssuesListEventsForTimelineProps) {
	const { owner, repo, issue_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/timeline`, {
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
