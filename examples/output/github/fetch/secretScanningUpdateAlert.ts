export interface SecretScanningUpdateAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface SecretScanningUpdateAlertRequestBody {
	resolution?: SecretScanningAlertResolution;
	state: SecretScanningAlertState;
}

export interface SecretScanningUpdateAlertProps
	extends Omit<RequestInit, 'method' | 'body'>,
		SecretScanningUpdateAlertPathParams {
	body: SecretScanningUpdateAlertRequestBody;
}

export async function secretScanningUpdateAlert(props: SecretScanningUpdateAlertProps) {
	const { owner, repo, alert_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/secret-scanning/alerts/${alert_number}`, {
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
