export interface ActionsListRunnerApplicationsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListRunnerApplicationsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListRunnerApplicationsForRepoPathParams {}

export async function actionsListRunnerApplicationsForRepo(
	props: ActionsListRunnerApplicationsForRepoProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runners/downloads`, {
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
