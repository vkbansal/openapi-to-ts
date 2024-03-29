/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseActionsDownloadWorkflowRunLogsQueryPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface UseActionsDownloadWorkflowRunLogsQueryProps
	extends UseActionsDownloadWorkflowRunLogsQueryPathParams {}

/**
 * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
 * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
 * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
 * the `actions:read` permission to use this endpoint.
 */

export function useActionsDownloadWorkflowRunLogsQuery(
	props: UseActionsDownloadWorkflowRunLogsQueryProps,
) {
	const { owner, repo, run_id } = props;

	return useQuery(['actions/download-workflow-run-logs', owner, repo, run_id]);
}
