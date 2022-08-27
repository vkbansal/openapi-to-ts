export interface EnterpriseAdminGetAllowedActionsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminGetAllowedActionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminGetAllowedActionsEnterprisePathParams {}

export async function enterpriseAdminGetAllowedActionsEnterprise(
	props: EnterpriseAdminGetAllowedActionsEnterpriseProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/permissions/selected-actions`, {
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
