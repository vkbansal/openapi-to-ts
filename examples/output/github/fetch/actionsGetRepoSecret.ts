export interface ActionsGetRepoSecretPathParams {
	owner: string;
	repo: string;
	secret_name: string;
}

export interface ActionsGetRepoSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetRepoSecretPathParams {}

export async function actionsGetRepoSecret(props: ActionsGetRepoSecretProps) {
	const { owner, repo, secret_name, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/secrets/${secret_name}`, {
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
