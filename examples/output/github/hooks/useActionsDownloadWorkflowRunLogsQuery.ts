import { useQuery } from '@tanstack/react-query';

export interface ActionsDownloadWorkflowRunLogsPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface UseActionsDownloadWorkflowRunLogsQueryProps
	extends ActionsDownloadWorkflowRunLogsPathParams {}

export function useActionsDownloadWorkflowRunLogsQuery(
	props: UseActionsDownloadWorkflowRunLogsQueryProps,
) {
	const { owner, repo, run_id } = props;

	return useQuery(['actions/download-workflow-run-logs', owner, repo, run_id]);
}
