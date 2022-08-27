export interface ActionsDeleteOrgSecretPathParams {
	org: string;
	secret_name: string;
}

export interface ActionsDeleteOrgSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteOrgSecretPathParams {}

export async function actionsDeleteOrgSecret(props: ActionsDeleteOrgSecretProps) {
	const { org, secret_name, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/secrets/${secret_name}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
