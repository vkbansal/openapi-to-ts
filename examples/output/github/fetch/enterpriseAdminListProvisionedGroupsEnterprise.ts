export interface EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams {
	startIndex?: number;
	count?: number;
	filter?: string;
	excludedAttributes?: string;
}

export interface EnterpriseAdminListProvisionedGroupsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListProvisionedGroupsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListProvisionedGroupsEnterprisePathParams {
	queryParams: EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams;
}

export async function enterpriseAdminListProvisionedGroupsEnterprise(
	props: EnterpriseAdminListProvisionedGroupsEnterpriseProps,
) {
	const { enterprise, queryParams, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Groups`, {
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
