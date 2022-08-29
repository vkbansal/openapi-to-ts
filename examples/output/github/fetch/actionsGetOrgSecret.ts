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

/**
 * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 */
export async function actionsGetOrgSecret(props: ActionsGetOrgSecretProps) {
	const { org, secret_name, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/secrets/${secret_name}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
