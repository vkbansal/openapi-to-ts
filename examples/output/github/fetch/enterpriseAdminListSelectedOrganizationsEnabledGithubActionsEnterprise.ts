export interface EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams {
	queryParams: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams;
}

export async function enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise(
	props: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseProps,
) {
	const { enterprise, queryParams, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/permissions/organizations`, {
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
