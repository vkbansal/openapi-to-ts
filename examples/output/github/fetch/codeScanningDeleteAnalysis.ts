export interface CodeScanningDeleteAnalysisQueryParams {
	confirm_delete?: string | null;
}

export interface CodeScanningDeleteAnalysisPathParams {
	owner: string;
	repo: string;
	analysis_id: number;
}

export interface CodeScanningDeleteAnalysisProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningDeleteAnalysisPathParams {
	queryParams: CodeScanningDeleteAnalysisQueryParams;
}

export async function codeScanningDeleteAnalysis(props: CodeScanningDeleteAnalysisProps) {
	const { owner, repo, analysis_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/analyses/${analysis_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
