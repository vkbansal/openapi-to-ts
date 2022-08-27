export interface ReposGetViewsQueryParams {
	/**
	 * @default "day"
	 */
	per?: '' | 'day' | 'week';
}

export interface ReposGetViewsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetViewsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetViewsPathParams {
	queryParams: ReposGetViewsQueryParams;
}

export async function reposGetViews(props: ReposGetViewsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/traffic/views`, {
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
