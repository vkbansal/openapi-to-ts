/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsSetGithubActionsPermissionsRepositoryPathParams {
	owner: string;
	repo: string;
}

export interface ActionsSetGithubActionsPermissionsRepositoryProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetGithubActionsPermissionsRepositoryPathParams {}

export async function actionsSetGithubActionsPermissionsRepository(
	props: ActionsSetGithubActionsPermissionsRepositoryProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/permissions`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}