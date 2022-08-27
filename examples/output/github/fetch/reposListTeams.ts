export interface ReposListTeamsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListTeamsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListTeamsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListTeamsPathParams {
	queryParams: ReposListTeamsQueryParams;
}

export async function reposListTeams(props: ReposListTeamsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/teams`, {
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
