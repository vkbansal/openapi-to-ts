export interface ReposListBranchesQueryParams {
	protected?: boolean;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListBranchesPathParams {
	owner: string;
	repo: string;
}

export interface ReposListBranchesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListBranchesPathParams {
	queryParams: ReposListBranchesQueryParams;
}

export async function reposListBranches(props: ReposListBranchesProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/branches`, {
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
