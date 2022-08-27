export interface ActionsCreateRemoveTokenForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsCreateRemoveTokenForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateRemoveTokenForRepoPathParams {}

export async function actionsCreateRemoveTokenForRepo(props: ActionsCreateRemoveTokenForRepoProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runners/remove-token`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
