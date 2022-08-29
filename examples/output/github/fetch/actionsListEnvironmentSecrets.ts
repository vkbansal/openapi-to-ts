/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ActionsListEnvironmentSecretsPathParams {
	repository_id: number;
	environment_name: string;
}

export interface ActionsListEnvironmentSecretsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListEnvironmentSecretsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListEnvironmentSecretsPathParams {
	queryParams: ActionsListEnvironmentSecretsQueryParams;
}

/**
 * Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 */
export async function actionsListEnvironmentSecrets(props: ActionsListEnvironmentSecretsProps) {
	const { repository_id, environment_name, queryParams, ...rest } = props;

	const response = await fetch(
		`/repositories/${repository_id}/environments/${environment_name}/secrets`,
		{
			method: 'GET',
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
