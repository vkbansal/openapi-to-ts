/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

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

/**
 * Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */
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
