/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposListForksQueryParams {
	sort?: 'newest' | 'oldest' | 'stargazers' | 'watchers';
	per_page?: number;
	page?: number;
	org?: string;
	organization?: string;
}

export interface ReposListForksPathParams {
	owner: string;
	repo: string;
}

export interface ReposListForksProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListForksPathParams {
	queryParams: ReposListForksQueryParams;
}

export async function reposListForks(props: ReposListForksProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/forks`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
