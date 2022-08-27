export interface EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams {
	enterprise: string;
	org_id: number;
}

export interface EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams {}

export async function enterpriseAdminDisableSelectedOrganizationGithubActionsEnterprise(
	props: EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseProps,
) {
	const { enterprise, org_id, ...rest } = props;

	const response = await fetch(
		`/enterprises/${enterprise}/actions/permissions/organizations/${org_id}`,
		{
			method: 'DELETE',
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
