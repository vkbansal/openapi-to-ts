export interface ReposGetAllTopicsQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface ReposGetAllTopicsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetAllTopicsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetAllTopicsPathParams {
	queryParams: ReposGetAllTopicsQueryParams;
}

export async function reposGetAllTopics(props: ReposGetAllTopicsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/topics`, {
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
