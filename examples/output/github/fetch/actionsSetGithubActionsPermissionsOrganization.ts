export interface ActionsSetGithubActionsPermissionsOrganizationPathParams {
	org: string;
}

export interface ActionsSetGithubActionsPermissionsOrganizationRequestBody {
	allowed_actions?: AllowedActions;
	enabled_repositories: EnabledRepositories;
}

export interface ActionsSetGithubActionsPermissionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetGithubActionsPermissionsOrganizationPathParams {
	body: ActionsSetGithubActionsPermissionsOrganizationRequestBody;
}

export async function actionsSetGithubActionsPermissionsOrganization(
	props: ActionsSetGithubActionsPermissionsOrganizationProps,
) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/permissions`, {
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
