/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

import type { CodeScanningAnalysisToolName } from '../schemas/CodeScanningAnalysisToolName';
import type { CodeScanningAnalysisToolGuid } from '../schemas/CodeScanningAnalysisToolGuid';
import type { CodeScanningRef } from '../schemas/CodeScanningRef';
import type { CodeScanningAlertState } from '../schemas/CodeScanningAlertState';

export interface UseCodeScanningListAlertsForRepoQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseCodeScanningListAlertsForRepoQueryQueryParams {
	tool_name?: CodeScanningAnalysisToolName;
	tool_guid?: CodeScanningAnalysisToolGuid;
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
	ref?: CodeScanningRef;
	state?: CodeScanningAlertState;
}

export interface UseCodeScanningListAlertsForRepoQueryProps
	extends UseCodeScanningListAlertsForRepoQueryPathParams {
	queryParams: UseCodeScanningListAlertsForRepoQueryQueryParams;
}

/**
 * Lists all open code scanning alerts for the default branch (usually `main`
 * or `master`). You must use an access token with the `security_events` scope to use
 * this endpoint. GitHub Apps must have the `security_events` read permission to use
 * this endpoint.
 *
 * The response includes a `most_recent_instance` object.
 * This provides details of the most recent instance of this alert
 * for the default branch or for the specified Git reference
 * (if you used `ref` in the request).
 */

export function useCodeScanningListAlertsForRepoQuery(
	props: UseCodeScanningListAlertsForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['code-scanning/list-alerts-for-repo', owner, repo, queryParams]);
}
