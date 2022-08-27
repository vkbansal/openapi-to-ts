export interface ActionsGetGithubActionsPermissionsRepositoryPathParams {
	owner: string;
	repo: string;
}

export interface ActionsGetGithubActionsPermissionsRepositoryProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetGithubActionsPermissionsRepositoryPathParams {}

export async function actionsGetGithubActionsPermissionsRepository(
	props: ActionsGetGithubActionsPermissionsRepositoryProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/permissions`, {
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
