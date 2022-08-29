/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { CodeScanningAnalysisCommitSha } from '../schemas/CodeScanningAnalysisCommitSha';
import { CodeScanningRef } from '../schemas/CodeScanningRef';
import { CodeScanningAnalysisSarifFile } from '../schemas/CodeScanningAnalysisSarifFile';

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

/**
 * Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
 *
 * There are two places where you can upload code scanning results.
 *  - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."
 *  - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
 *
 * You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
 *
 * ```
 * gzip -c analysis-data.sarif | base64
 * ```
 *
 * SARIF upload supports a maximum of 1000 results per analysis run. Any results over this limit are ignored. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
 *
 * The `202 Accepted`, response includes an `id` value.
 * You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
 * For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."
 */
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
