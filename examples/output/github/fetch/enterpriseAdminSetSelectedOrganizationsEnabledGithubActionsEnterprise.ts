export interface EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody {
	/**
	 * List of organization IDs to enable for GitHub Actions.
	 */
	selected_organization_ids: number[];
}

export interface EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprisePathParams {
	body: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequestBody;
}

export async function enterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterprise(
	props: EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseProps,
) {
	const { enterprise, body, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/permissions/organizations`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
