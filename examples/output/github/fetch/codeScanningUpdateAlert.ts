export interface CodeScanningUpdateAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface CodeScanningUpdateAlertRequestBody {
	dismissed_reason?: CodeScanningAlertDismissedReason;
	state: CodeScanningAlertSetState;
}

export interface CodeScanningUpdateAlertProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningUpdateAlertPathParams {
	body: CodeScanningUpdateAlertRequestBody;
}

export async function codeScanningUpdateAlert(props: CodeScanningUpdateAlertProps) {
	const { owner, repo, alert_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/code-scanning/alerts/${alert_number}`, {
		method: 'PATCH',
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
