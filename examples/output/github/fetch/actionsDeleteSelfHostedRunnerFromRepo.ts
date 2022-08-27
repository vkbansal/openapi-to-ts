export interface ActionsDeleteSelfHostedRunnerFromRepoPathParams {
	owner: string;
	repo: string;
	runner_id: number;
}

export interface ActionsDeleteSelfHostedRunnerFromRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteSelfHostedRunnerFromRepoPathParams {}

export async function actionsDeleteSelfHostedRunnerFromRepo(
	props: ActionsDeleteSelfHostedRunnerFromRepoProps,
) {
	const { owner, repo, runner_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runners/${runner_id}`, {
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
