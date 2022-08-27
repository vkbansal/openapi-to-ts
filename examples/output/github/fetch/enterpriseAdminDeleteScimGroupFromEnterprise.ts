export interface EnterpriseAdminDeleteScimGroupFromEnterprisePathParams {
	enterprise: string;
	scim_group_id: string;
}

export interface EnterpriseAdminDeleteScimGroupFromEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminDeleteScimGroupFromEnterprisePathParams {}

export async function enterpriseAdminDeleteScimGroupFromEnterprise(
	props: EnterpriseAdminDeleteScimGroupFromEnterpriseProps,
) {
	const { enterprise, scim_group_id, ...rest } = props;

	const response = await fetch(`/scim/v2/enterprises/${enterprise}/Groups/${scim_group_id}`, {
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
