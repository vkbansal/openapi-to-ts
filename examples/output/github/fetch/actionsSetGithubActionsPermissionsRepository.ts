export interface ActionsSetGithubActionsPermissionsRepositoryPathParams {
	owner: string;
	repo: string;
}

export interface ActionsSetGithubActionsPermissionsRepositoryRequestBody {
	allowed_actions?: AllowedActions;
	enabled: ActionsEnabled;
}

export interface ActionsSetGithubActionsPermissionsRepositoryProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetGithubActionsPermissionsRepositoryPathParams {
	body: ActionsSetGithubActionsPermissionsRepositoryRequestBody;
}

export async function actionsSetGithubActionsPermissionsRepository(
	props: ActionsSetGithubActionsPermissionsRepositoryProps,
) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/permissions`, {
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
