/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { CodeScanningAnalysisToolName } from '../schemas/CodeScanningAnalysisToolName';
import type { CodeScanningAnalysisToolGuid } from '../schemas/CodeScanningAnalysisToolGuid';
import type { CodeScanningRef } from '../schemas/CodeScanningRef';
import type { CodeScanningAnalysisSarifId } from '../schemas/CodeScanningAnalysisSarifId';

import { fetcher as _fetcher } from './fetcher';

export interface CodeScanningListRecentAnalysesPathParams {
	owner: string;
	repo: string;
}

export interface CodeScanningListRecentAnalysesQueryParams {
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
	sarif_id?: CodeScanningAnalysisSarifId;
}

export interface CodeScanningListRecentAnalysesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningListRecentAnalysesPathParams {
	queryParams: CodeScanningListRecentAnalysesQueryParams;
	paramsSerializer?: (params: CodeScanningListRecentAnalysesQueryParams) => string;
}

/**
 * Lists the details of all code scanning analyses for a repository,
 * starting with the most recent.
 * The response is paginated and you can use the `page` and `per_page` parameters
 * to list the analyses you're interested in.
 * By default 30 analyses are listed per page.
 *
 * The `rules_count` field in the response give the number of rules
 * that were run in the analysis.
 * For very old analyses this data is not available,
 * and `0` is returned in this field.
 *
 * You must use an access token with the `security_events` scope to use this endpoint.
 * GitHub Apps must have the `security_events` read permission to use this endpoint.
 *
 * **Deprecation notice**:
 * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
 */
export async function codeScanningListRecentAnalyses(props: CodeScanningListRecentAnalysesProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, CodeScanningListRecentAnalysesQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/code-scanning/analyses`,
		method: 'GET',
		...rest,
	});
}
