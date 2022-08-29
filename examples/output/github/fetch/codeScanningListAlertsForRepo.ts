/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { CodeScanningAnalysisToolName } from '../schemas/CodeScanningAnalysisToolName';
import type { CodeScanningAnalysisToolGuid } from '../schemas/CodeScanningAnalysisToolGuid';
import type { CodeScanningRef } from '../schemas/CodeScanningRef';
import type { CodeScanningAlertState } from '../schemas/CodeScanningAlertState';

import { fetcher as _fetcher } from './fetcher';

export interface CodeScanningListAlertsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface CodeScanningListAlertsForRepoQueryParams {
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

export interface CodeScanningListAlertsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningListAlertsForRepoPathParams {
	queryParams: CodeScanningListAlertsForRepoQueryParams;
	paramsSerializer?: (params: CodeScanningListAlertsForRepoQueryParams) => string;
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
export async function codeScanningListAlertsForRepo(props: CodeScanningListAlertsForRepoProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, CodeScanningListAlertsForRepoQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/code-scanning/alerts`,
		method: 'GET',
		...rest,
	});
}
