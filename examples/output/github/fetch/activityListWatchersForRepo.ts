export interface ActivityListWatchersForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListWatchersForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListWatchersForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListWatchersForRepoPathParams {
	queryParams: ActivityListWatchersForRepoQueryParams;
}

export async function activityListWatchersForRepo(props: ActivityListWatchersForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/subscribers`, {
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
