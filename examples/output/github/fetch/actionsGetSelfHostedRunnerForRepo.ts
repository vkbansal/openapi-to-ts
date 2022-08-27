export interface ActionsGetSelfHostedRunnerForRepoPathParams {
	owner: string;
	repo: string;
	runner_id: number;
}

export interface ActionsGetSelfHostedRunnerForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetSelfHostedRunnerForRepoPathParams {}

export async function actionsGetSelfHostedRunnerForRepo(
	props: ActionsGetSelfHostedRunnerForRepoProps,
) {
	const { owner, repo, runner_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runners/${runner_id}`, {
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
