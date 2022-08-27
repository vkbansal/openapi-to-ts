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

export interface CodeScanningListAlertsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface CodeScanningListAlertsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningListAlertsForRepoPathParams {
	queryParams: CodeScanningListAlertsForRepoQueryParams;
}

export async function codeScanningListAlertsForRepo(props: CodeScanningListAlertsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/alerts`, {
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
