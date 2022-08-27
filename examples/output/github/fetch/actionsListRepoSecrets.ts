/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsListRepoSecretsQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}
