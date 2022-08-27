export interface EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody {
	allowed_actions?: AllowedActions;
	enabled_organizations: EnabledOrganizations;
}

export interface EnterpriseAdminSetGithubActionsPermissionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams {
	body: EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody;
}

export async function enterpriseAdminSetGithubActionsPermissionsEnterprise(
	props: EnterpriseAdminSetGithubActionsPermissionsEnterpriseProps,
) {
	const { enterprise, body, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/permissions`, {
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
