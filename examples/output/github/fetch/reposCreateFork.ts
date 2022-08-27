export interface ReposCreateForkQueryParams {
	org?: string;
	organization?: string;
}

export interface ReposCreateForkPathParams {
	owner: string;
	repo: string;
}

export interface ReposCreateForkRequestBody {
	/**
	 * Optional parameter to specify the organization name if forking into an organization.
	 */
	organization?: string;
}

export interface ReposCreateForkProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateForkPathParams {
	body: ReposCreateForkRequestBody;
	queryParams: ReposCreateForkQueryParams;
}

export async function reposCreateFork(props: ReposCreateForkProps) {
	const { owner, repo, body, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/forks`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
