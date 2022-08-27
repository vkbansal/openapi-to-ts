export interface ActionsAddSelectedRepoToOrgSecretPathParams {
	org: string;
	secret_name: string;
	repository_id: number;
}

export interface ActionsAddSelectedRepoToOrgSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsAddSelectedRepoToOrgSecretPathParams {}

export async function actionsAddSelectedRepoToOrgSecret(
	props: ActionsAddSelectedRepoToOrgSecretProps,
) {
	const { org, secret_name, repository_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/actions/secrets/${secret_name}/repositories/${repository_id}`,
		{
			method: 'PUT',
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
