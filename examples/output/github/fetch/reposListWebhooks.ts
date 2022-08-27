/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposListWebhooksQueryParams {
	per_page?: number;
	page?: number;
}

export interface ReposListWebhooksPathParams {
	owner: string;
	repo: string;
}

export interface ReposListWebhooksProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListWebhooksPathParams {
	queryParams: ReposListWebhooksQueryParams;
}

export async function reposListWebhooks(props: ReposListWebhooksProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/hooks`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
