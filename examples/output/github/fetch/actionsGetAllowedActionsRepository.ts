export interface ActionsGetAllowedActionsRepositoryPathParams {
	owner: string;
	repo: string;
}

export interface ActionsGetAllowedActionsRepositoryProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetAllowedActionsRepositoryPathParams {}

export async function actionsGetAllowedActionsRepository(
	props: ActionsGetAllowedActionsRepositoryProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/permissions/selected-actions`, {
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
