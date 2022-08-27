export interface SecretScanningGetAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface SecretScanningGetAlertProps
	extends Omit<RequestInit, 'method' | 'body'>,
		SecretScanningGetAlertPathParams {}

export async function secretScanningGetAlert(props: SecretScanningGetAlertProps) {
	const { owner, repo, alert_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/secret-scanning/alerts/${alert_number}`, {
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
