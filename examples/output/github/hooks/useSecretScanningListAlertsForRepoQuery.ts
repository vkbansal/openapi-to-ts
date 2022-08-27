import { useQuery } from '@tanstack/react-query';

export interface SecretScanningListAlertsForRepoPathParams {
	owner: string;
	repo: string;
}

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

export interface UseSecretScanningListAlertsForRepoQueryProps
	extends SecretScanningListAlertsForRepoPathParams {
	queryParams: SecretScanningListAlertsForRepoQueryParams;
}

export function useSecretScanningListAlertsForRepoQuery(
	props: UseSecretScanningListAlertsForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['secret-scanning/list-alerts-for-repo', owner, repo, queryParams]);
}
