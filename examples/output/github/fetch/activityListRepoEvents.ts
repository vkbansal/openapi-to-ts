export interface ActivityListRepoEventsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListRepoEventsPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListRepoEventsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListRepoEventsPathParams {
	queryParams: ActivityListRepoEventsQueryParams;
}

export async function activityListRepoEvents(props: ActivityListRepoEventsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/events`, {
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
