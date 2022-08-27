export interface GitListMatchingRefsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface GitListMatchingRefsPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface GitListMatchingRefsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitListMatchingRefsPathParams {
	queryParams: GitListMatchingRefsQueryParams;
}

export async function gitListMatchingRefs(props: GitListMatchingRefsProps) {
	const { owner, repo, ref, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/matching-refs/${ref}`, {
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
