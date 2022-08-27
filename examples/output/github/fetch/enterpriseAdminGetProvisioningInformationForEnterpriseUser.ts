export interface EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams {
	enterprise: string;
	scim_user_id: string;
}

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams {}

export async function enterpriseAdminGetProvisioningInformationForEnterpriseUser(
	props: EnterpriseAdminGetProvisioningInformationForEnterpriseUserProps,
) {
	const { enterprise, scim_user_id, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Users/${scim_user_id}`, {
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
