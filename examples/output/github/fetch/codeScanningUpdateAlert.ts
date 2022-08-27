/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface CodeScanningUpdateAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface CodeScanningUpdateAlertProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningUpdateAlertPathParams {}

export async function codeScanningUpdateAlert(props: CodeScanningUpdateAlertProps) {
	const { owner, repo, alert_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/alerts/${alert_number}`, {
		method: 'PATCH',
		...rest,
	});

	const json = await response.json();

	return json;
}