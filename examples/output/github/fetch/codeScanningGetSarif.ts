export interface CodeScanningGetSarifPathParams {
	owner: string;
	repo: string;
	sarif_id: string;
}

export interface CodeScanningGetSarifProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningGetSarifPathParams {}

export async function codeScanningGetSarif(props: CodeScanningGetSarifProps) {
	const { owner, repo, sarif_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/sarifs/${sarif_id}`, {
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
