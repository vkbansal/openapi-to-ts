/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsCreateOrUpdateRepoSecretPathParams {
	owner: string;
	repo: string;
	secret_name: string;
}

export interface ActionsCreateOrUpdateRepoSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateOrUpdateRepoSecretPathParams {}

export async function actionsCreateOrUpdateRepoSecret(props: ActionsCreateOrUpdateRepoSecretProps) {
	const { owner, repo, secret_name, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/secrets/${secret_name}`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}
