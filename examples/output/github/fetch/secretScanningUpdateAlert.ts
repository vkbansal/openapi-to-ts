/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface SecretScanningUpdateAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface SecretScanningUpdateAlertProps
	extends Omit<RequestInit, 'method' | 'body'>,
		SecretScanningUpdateAlertPathParams {}

export async function secretScanningUpdateAlert(props: SecretScanningUpdateAlertProps) {
	const { owner, repo, alert_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/secret-scanning/alerts/${alert_number}`, {
		method: 'PATCH',
		...rest,
	});

	const json = await response.json();

	return json;
}
