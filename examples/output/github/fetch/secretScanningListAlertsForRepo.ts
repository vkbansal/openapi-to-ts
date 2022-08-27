export interface SecretScanningListAlertsForRepoQueryParams {
	state?: 'open' | 'resolved';
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface SecretScanningListAlertsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface SecretScanningListAlertsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		SecretScanningListAlertsForRepoPathParams {
	queryParams: SecretScanningListAlertsForRepoQueryParams;
}

export async function secretScanningListAlertsForRepo(props: SecretScanningListAlertsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/secret-scanning/alerts`, {
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
