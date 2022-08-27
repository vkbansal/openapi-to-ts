export interface ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams {
	org: string;
	repository_id: number;
}

export interface ActionsDisableSelectedRepositoryGithubActionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams {}

export async function actionsDisableSelectedRepositoryGithubActionsOrganization(
	props: ActionsDisableSelectedRepositoryGithubActionsOrganizationProps,
) {
	const { org, repository_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/permissions/repositories/${repository_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
