/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ActionsDeleteEnvironmentSecretPathParams {
	repository_id: number;
	environment_name: string;
	secret_name: string;
}

export interface ActionsDeleteEnvironmentSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteEnvironmentSecretPathParams {}

/**
 * Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 */
export async function actionsDeleteEnvironmentSecret(props: ActionsDeleteEnvironmentSecretProps) {
	const { repository_id, environment_name, secret_name, ...rest } = props;

	const response = await fetch(
		`/repositories/${repository_id}/environments/${environment_name}/secrets/${secret_name}`,
		{
			method: 'DELETE',
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
