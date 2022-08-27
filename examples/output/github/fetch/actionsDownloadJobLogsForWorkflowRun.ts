/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsDownloadJobLogsForWorkflowRunPathParams {
	owner: string;
	repo: string;
	job_id: number;
}

export interface ActionsDownloadJobLogsForWorkflowRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDownloadJobLogsForWorkflowRunPathParams {}

export async function actionsDownloadJobLogsForWorkflowRun(
	props: ActionsDownloadJobLogsForWorkflowRunProps,
) {
	const { owner, repo, job_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/jobs/${job_id}/logs`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}