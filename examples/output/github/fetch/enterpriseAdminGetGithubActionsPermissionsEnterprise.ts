export interface EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminGetGithubActionsPermissionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams {}

export async function enterpriseAdminGetGithubActionsPermissionsEnterprise(
	props: EnterpriseAdminGetGithubActionsPermissionsEnterpriseProps,
) {
	const { enterprise, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/permissions`, {
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
