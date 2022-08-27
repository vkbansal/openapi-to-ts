import { useQuery } from '@tanstack/react-query';
import { CodeScanningAnalysisToolName } from '../schemas/CodeScanningAnalysisToolName';
import { CodeScanningAnalysisToolGuid } from '../schemas/CodeScanningAnalysisToolGuid';
import { CodeScanningRef } from '../schemas/CodeScanningRef';
import { CodeScanningAlertState } from '../schemas/CodeScanningAlertState';

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

export interface UseCodeScanningListAlertsForRepoQueryProps
	extends CodeScanningListAlertsForRepoPathParams {
	queryParams: CodeScanningListAlertsForRepoQueryParams;
}

export function useCodeScanningListAlertsForRepoQuery(
	props: UseCodeScanningListAlertsForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['code-scanning/list-alerts-for-repo', owner, repo, queryParams]);
}
