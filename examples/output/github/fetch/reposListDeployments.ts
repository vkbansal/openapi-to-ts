export interface ReposListDeploymentsQueryParams {
	/**
	 * @default "none"
	 */
	sha?: string;
	/**
	 * @default "none"
	 */
	ref?: string;
	/**
	 * @default "none"
	 */
	task?: string;
	/**
	 * @default "none"
	 */
	environment?: string | null;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListDeploymentsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListDeploymentsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListDeploymentsPathParams {
	queryParams: ReposListDeploymentsQueryParams;
}

export async function reposListDeployments(props: ReposListDeploymentsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/deployments`, {
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
