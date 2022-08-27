export interface ActionsListRepoSecretsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListRepoSecretsPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListRepoSecretsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListRepoSecretsPathParams {
	queryParams: ActionsListRepoSecretsQueryParams;
}

export async function actionsListRepoSecrets(props: ActionsListRepoSecretsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/secrets`, {
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
