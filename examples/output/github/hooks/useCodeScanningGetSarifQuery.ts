/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface CodeScanningGetSarifPathParams {
	owner: string;
	repo: string;
	sarif_id: string;
}

export interface UseCodeScanningGetSarifQueryProps extends CodeScanningGetSarifPathParams {}

/**
 * Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
 */

export function useCodeScanningGetSarifQuery(props: UseCodeScanningGetSarifQueryProps) {
	const { owner, repo, sarif_id } = props;

	return useQuery(['code-scanning/get-sarif', owner, repo, sarif_id]);
}
