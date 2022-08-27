/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsGetOrgSecretPathParams {
	org: string;
	secret_name: string;
}

export interface ActionsGetOrgSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetOrgSecretPathParams {}

export async function actionsGetOrgSecret(props: ActionsGetOrgSecretProps) {
	const { org, secret_name, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/secrets/${secret_name}`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
