export interface EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams {
	excludedAttributes?: string;
}

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams {
	enterprise: string;
	scim_group_id: string;
}

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseGroupProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams {
	queryParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams;
}

export async function enterpriseAdminGetProvisioningInformationForEnterpriseGroup(
	props: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupProps,
) {
	const { enterprise, scim_group_id, queryParams, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Groups/${scim_group_id}`, {
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
