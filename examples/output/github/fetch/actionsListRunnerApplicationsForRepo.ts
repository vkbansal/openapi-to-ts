/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ActionsListRunnerApplicationsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListRunnerApplicationsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListRunnerApplicationsForRepoPathParams {}

/**
 * Lists binaries for the runner application that you can download and run.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 */
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
