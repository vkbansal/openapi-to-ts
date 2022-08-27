export interface ProjectsListForRepoQueryParams {
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ProjectsListForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ProjectsListForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListForRepoPathParams {
	queryParams: ProjectsListForRepoQueryParams;
}

export async function projectsListForRepo(props: ProjectsListForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/projects`, {
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
