export interface ActionsDeleteEnvironmentSecretPathParams {
	repository_id: number;
	environment_name: string;
	secret_name: string;
}

export interface ActionsDeleteEnvironmentSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteEnvironmentSecretPathParams {}

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
