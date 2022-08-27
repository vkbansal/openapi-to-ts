export interface PullsListFilesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListFilesPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListFilesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsListFilesPathParams {
	queryParams: PullsListFilesQueryParams;
}

export async function pullsListFiles(props: PullsListFilesProps) {
	const { owner, repo, pull_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/files`, {
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
