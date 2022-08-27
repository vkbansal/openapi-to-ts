export interface CodeScanningGetAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface CodeScanningGetAlertProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningGetAlertPathParams {}

export async function codeScanningGetAlert(props: CodeScanningGetAlertProps) {
	const { owner, repo, alert_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/alerts/${alert_number}`, {
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
