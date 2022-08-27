/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface SecretScanningListAlertsForRepoQueryParams {
	state?: 'open' | 'resolved';
	page?: number;
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
	});

	const json = await response.json();

	return json;
}