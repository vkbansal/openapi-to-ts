export interface EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams {
	startIndex?: number;
	count?: number;
	filter?: string;
}

export interface EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListProvisionedIdentitiesEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams {
	queryParams: EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams;
}

export async function enterpriseAdminListProvisionedIdentitiesEnterprise(
	props: EnterpriseAdminListProvisionedIdentitiesEnterpriseProps,
) {
	const { enterprise, queryParams, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Users`, {
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
