export interface ActionsDeleteRepoSecretPathParams {
	owner: string;
	repo: string;
	secret_name: string;
}

export interface ActionsDeleteRepoSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteRepoSecretPathParams {}

export async function actionsDeleteRepoSecret(props: ActionsDeleteRepoSecretProps) {
	const { owner, repo, secret_name, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/secrets/${secret_name}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
