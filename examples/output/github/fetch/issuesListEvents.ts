/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface IssuesListEventsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListEventsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListEventsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListEventsPathParams {
	queryParams: IssuesListEventsQueryParams;
}

/**
 *
 */
export async function issuesListEvents(props: IssuesListEventsProps) {
	const { owner, repo, issue_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/events`, {
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
