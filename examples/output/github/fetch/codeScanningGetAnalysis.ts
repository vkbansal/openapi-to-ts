export interface CodeScanningGetAnalysisPathParams {
	owner: string;
	repo: string;
	analysis_id: number;
}

export interface CodeScanningGetAnalysisProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningGetAnalysisPathParams {}

export async function codeScanningGetAnalysis(props: CodeScanningGetAnalysisProps) {
	const { owner, repo, analysis_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/analyses/${analysis_id}`, {
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
