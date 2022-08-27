export interface ActionsListOrgSecretsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListOrgSecretsPathParams {
	org: string;
}

export interface ActionsListOrgSecretsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListOrgSecretsPathParams {
	queryParams: ActionsListOrgSecretsQueryParams;
}

export async function actionsListOrgSecrets(props: ActionsListOrgSecretsProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/secrets`, {
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
