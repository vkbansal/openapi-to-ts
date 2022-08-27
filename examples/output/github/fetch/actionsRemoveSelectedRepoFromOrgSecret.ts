export interface ActionsRemoveSelectedRepoFromOrgSecretPathParams {
	org: string;
	secret_name: string;
	repository_id: number;
}

export interface ActionsRemoveSelectedRepoFromOrgSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsRemoveSelectedRepoFromOrgSecretPathParams {}

export async function actionsRemoveSelectedRepoFromOrgSecret(
	props: ActionsRemoveSelectedRepoFromOrgSecretProps,
) {
	const { org, secret_name, repository_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/actions/secrets/${secret_name}/repositories/${repository_id}`,
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
