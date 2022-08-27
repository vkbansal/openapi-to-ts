export interface ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams {
	org: string;
	repository_id: number;
}

export interface ActionsEnableSelectedRepositoryGithubActionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams {}

export async function actionsEnableSelectedRepositoryGithubActionsOrganization(
	props: ActionsEnableSelectedRepositoryGithubActionsOrganizationProps,
) {
	const { org, repository_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/permissions/repositories/${repository_id}`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
