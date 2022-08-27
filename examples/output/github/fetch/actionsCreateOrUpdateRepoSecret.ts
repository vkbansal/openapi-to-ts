export interface ActionsCreateOrUpdateRepoSecretPathParams {
	owner: string;
	repo: string;
	secret_name: string;
}

export interface ActionsCreateOrUpdateRepoSecretRequestBody {
	/**
	 * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/reference/actions#get-a-repository-public-key) endpoint.
	 */
	encrypted_value?: string;
	/**
	 * ID of the key you used to encrypt the secret.
	 */
	key_id?: string;
}

export interface ActionsCreateOrUpdateRepoSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateOrUpdateRepoSecretPathParams {
	body: ActionsCreateOrUpdateRepoSecretRequestBody;
}

export async function actionsCreateOrUpdateRepoSecret(props: ActionsCreateOrUpdateRepoSecretProps) {
	const { owner, repo, secret_name, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/secrets/${secret_name}`, {
		method: 'PUT',
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
