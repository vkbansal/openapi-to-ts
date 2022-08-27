export interface ActivityListStargazersForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListStargazersForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListStargazersForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListStargazersForRepoPathParams {
	queryParams: ActivityListStargazersForRepoQueryParams;
}

export async function activityListStargazersForRepo(props: ActivityListStargazersForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/stargazers`, {
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
