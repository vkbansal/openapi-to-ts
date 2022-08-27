export interface EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams {
	enterprise: string;
	org_id: number;
}

export interface EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams {}

export async function enterpriseAdminEnableSelectedOrganizationGithubActionsEnterprise(
	props: EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseProps,
) {
	const { enterprise, org_id, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/permissions/organizations/${org_id}`,
		{
			method: 'PUT',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
