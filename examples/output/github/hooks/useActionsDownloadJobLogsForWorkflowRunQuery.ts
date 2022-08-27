import { useQuery } from '@tanstack/react-query';

export interface ActionsDownloadJobLogsForWorkflowRunPathParams {
	owner: string;
	repo: string;
	job_id: number;
}

export interface UseActionsDownloadJobLogsForWorkflowRunQueryProps
	extends ActionsDownloadJobLogsForWorkflowRunPathParams {}

export function useActionsDownloadJobLogsForWorkflowRunQuery(
	props: UseActionsDownloadJobLogsForWorkflowRunQueryProps,
) {
	const { owner, repo, job_id } = props;

	return useQuery(['actions/download-job-logs-for-workflow-run', owner, repo, job_id]);
}
