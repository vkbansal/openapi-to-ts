import { useQuery } from '@tanstack/react-query';
import { CodeScanningAnalysisToolName } from '../schemas/CodeScanningAnalysisToolName';
import { CodeScanningAnalysisToolGuid } from '../schemas/CodeScanningAnalysisToolGuid';
import { CodeScanningRef } from '../schemas/CodeScanningRef';
import { CodeScanningAnalysisSarifId } from '../schemas/CodeScanningAnalysisSarifId';

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

export interface UseCodeScanningListRecentAnalysesQueryProps
	extends CodeScanningListRecentAnalysesPathParams {
	queryParams: CodeScanningListRecentAnalysesQueryParams;
}

export function useCodeScanningListRecentAnalysesQuery(
	props: UseCodeScanningListRecentAnalysesQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['code-scanning/list-recent-analyses', owner, repo, queryParams]);
}
