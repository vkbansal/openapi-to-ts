/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposListContributorsQueryParams {
	anon?: string;
	per_page?: number;
	page?: number;
}

export interface ReposListContributorsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListContributorsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListContributorsPathParams {
	queryParams: ReposListContributorsQueryParams;
}

export async function reposListContributors(props: ReposListContributorsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/contributors`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
