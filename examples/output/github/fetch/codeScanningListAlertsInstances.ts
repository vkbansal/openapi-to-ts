export interface CodeScanningListAlertsInstancesQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
	ref?: CodeScanningRef;
}

export interface CodeScanningListAlertsInstancesPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface CodeScanningListAlertsInstancesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		CodeScanningListAlertsInstancesPathParams {
	queryParams: CodeScanningListAlertsInstancesQueryParams;
}

export async function codeScanningListAlertsInstances(props: CodeScanningListAlertsInstancesProps) {
	const { owner, repo, alert_number, queryParams, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/code-scanning/alerts/${alert_number}/instances`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
