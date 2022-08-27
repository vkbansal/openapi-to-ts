export interface CodeScanningUploadSarifPathParams {
	owner: string;
	repo: string;
}

export interface CodeScanningUploadSarifRequestBody {
	/**
	 * The base directory used in the analysis, as it appears in the SARIF file.
	 * This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.
	 * @format uri
	 * @example "file:///github/workspace/"
	 */
	checkout_uri?: string;
	commit_sha: CodeScanningAnalysisCommitSha;
	ref: CodeScanningRef;
	sarif: CodeScanningAnalysisSarifFile;
	/**
	 * The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	 * @format date
	 */
	started_at?: string;
	/**
	 * The name of the tool used to generate the code scanning analysis. If this parameter is not used, the tool name defaults to "API". If the uploaded SARIF contains a tool GUID, this will be available for filtering using the `tool_guid` parameter of operations such as `GET /repos/{owner}/{repo}/code-scanning/alerts`.
	 */
	tool_name?: string;
}

export interface CodeScanningUploadSarifProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningUploadSarifPathParams {
	body: CodeScanningUploadSarifRequestBody;
}

export async function codeScanningUploadSarif(props: CodeScanningUploadSarifProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/sarifs`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
