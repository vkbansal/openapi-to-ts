export interface ReposListDeployKeysQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListDeployKeysPathParams {
	owner: string;
	repo: string;
}

export interface ReposListDeployKeysProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListDeployKeysPathParams {
	queryParams: ReposListDeployKeysQueryParams;
}

export async function reposListDeployKeys(props: ReposListDeployKeysProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/keys`, {
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
