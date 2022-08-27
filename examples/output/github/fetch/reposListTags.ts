export interface ReposListTagsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListTagsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListTagsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListTagsPathParams {
	queryParams: ReposListTagsQueryParams;
}

export async function reposListTags(props: ReposListTagsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/tags`, {
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
