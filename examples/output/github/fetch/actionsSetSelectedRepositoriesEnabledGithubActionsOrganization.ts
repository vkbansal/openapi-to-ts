export interface ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams {
	org: string;
}

export interface ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody {
	/**
	 * List of repository IDs to enable for GitHub Actions.
	 */
	selected_repository_ids: number[];
}

export interface ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams {
	body: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody;
}

export async function actionsSetSelectedRepositoriesEnabledGithubActionsOrganization(
	props: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationProps,
) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/permissions/repositories`, {
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
