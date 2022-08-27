export interface ActionsGetEnvironmentSecretPathParams {
	repository_id: number;
	environment_name: string;
	secret_name: string;
}

export interface ActionsGetEnvironmentSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetEnvironmentSecretPathParams {}

export async function actionsGetEnvironmentSecret(props: ActionsGetEnvironmentSecretProps) {
	const { repository_id, environment_name, secret_name, ...rest } = props;

	const response = await fetch(
		`/repositories/${repository_id}/environments/${environment_name}/secrets/${secret_name}`,
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
