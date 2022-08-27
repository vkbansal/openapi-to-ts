export interface ActionsGetEnvironmentPublicKeyPathParams {
	repository_id: number;
	environment_name: string;
}

export interface ActionsGetEnvironmentPublicKeyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetEnvironmentPublicKeyPathParams {}

export async function actionsGetEnvironmentPublicKey(props: ActionsGetEnvironmentPublicKeyProps) {
	const { repository_id, environment_name, ...rest } = props;

	const response = await fetch(
		`/repositories/${repository_id}/environments/${environment_name}/secrets/public-key`,
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
