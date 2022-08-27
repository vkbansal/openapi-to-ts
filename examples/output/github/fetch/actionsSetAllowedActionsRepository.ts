export interface ActionsSetAllowedActionsRepositoryPathParams {
	owner: string;
	repo: string;
}

export type ActionsSetAllowedActionsRepositoryRequestBody = SelectedActions;

export interface ActionsSetAllowedActionsRepositoryProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetAllowedActionsRepositoryPathParams {
	body: ActionsSetAllowedActionsRepositoryRequestBody;
}

export async function actionsSetAllowedActionsRepository(
	props: ActionsSetAllowedActionsRepositoryProps,
) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/permissions/selected-actions`, {
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
