export interface ReposListCommitStatusesForRefQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListCommitStatusesForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposListCommitStatusesForRefProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListCommitStatusesForRefPathParams {
	queryParams: ReposListCommitStatusesForRefQueryParams;
}

export async function reposListCommitStatusesForRef(props: ReposListCommitStatusesForRefProps) {
	const { owner, repo, ref, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${ref}/statuses`, {
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
