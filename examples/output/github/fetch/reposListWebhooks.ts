export interface ReposListWebhooksQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
