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

export interface CodeScanningListRecentAnalysesPathParams {
	owner: string;
	repo: string;
}

export interface CodeScanningListRecentAnalysesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningListRecentAnalysesPathParams {
	queryParams: CodeScanningListRecentAnalysesQueryParams;
}

export async function codeScanningListRecentAnalyses(props: CodeScanningListRecentAnalysesProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/analyses`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
