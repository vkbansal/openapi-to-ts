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

export interface ActionsListEnvironmentSecretsPathParams {
	repository_id: number;
	environment_name: string;
}

export interface ActionsListEnvironmentSecretsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListEnvironmentSecretsPathParams {
	queryParams: ActionsListEnvironmentSecretsQueryParams;
}

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
