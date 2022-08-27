export interface ScimListProvisionedIdentitiesQueryParams {
	startIndex?: number;
	count?: number;
	filter?: string;
}

export interface ScimListProvisionedIdentitiesPathParams {
	org: string;
}

export interface ScimListProvisionedIdentitiesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ScimListProvisionedIdentitiesPathParams {
	queryParams: ScimListProvisionedIdentitiesQueryParams;
}

export async function scimListProvisionedIdentities(props: ScimListProvisionedIdentitiesProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/scim/v2/organizations/${org}/Users`, {
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
