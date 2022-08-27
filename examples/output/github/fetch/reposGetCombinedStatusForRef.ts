export interface ReposGetCombinedStatusForRefQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposGetCombinedStatusForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposGetCombinedStatusForRefProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCombinedStatusForRefPathParams {
	queryParams: ReposGetCombinedStatusForRefQueryParams;
}

export async function reposGetCombinedStatusForRef(props: ReposGetCombinedStatusForRefProps) {
	const { owner, repo, ref, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${ref}/status`, {
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
