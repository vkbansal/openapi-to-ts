export interface ActionsCreateOrUpdateEnvironmentSecretPathParams {
	repository_id: number;
	environment_name: string;
	secret_name: string;
}

export interface ActionsCreateOrUpdateEnvironmentSecretRequestBody {
	/**
	 * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/reference/actions#get-an-environment-public-key) endpoint.
	 */
	encrypted_value?: string;
	/**
	 * ID of the key you used to encrypt the secret.
	 */
	key_id?: string;
}

export interface ActionsCreateOrUpdateEnvironmentSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateOrUpdateEnvironmentSecretPathParams {
	body: ActionsCreateOrUpdateEnvironmentSecretRequestBody;
}

export async function actionsCreateOrUpdateEnvironmentSecret(
	props: ActionsCreateOrUpdateEnvironmentSecretProps,
) {
	const { repository_id, environment_name, secret_name, body, ...rest } = props;

	const response = await fetch(
		`/repositories/${repository_id}/environments/${environment_name}/secrets/${secret_name}`,
		{
			method: 'PUT',
			body: JSON.stringify(body),
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
