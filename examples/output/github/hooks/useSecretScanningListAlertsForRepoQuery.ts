/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseSecretScanningListAlertsForRepoQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseSecretScanningListAlertsForRepoQueryQueryParams {
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
	extends UseSecretScanningListAlertsForRepoQueryPathParams {
	queryParams: UseSecretScanningListAlertsForRepoQueryQueryParams;
}

/**
 * Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 */

export function useSecretScanningListAlertsForRepoQuery(
	props: UseSecretScanningListAlertsForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['secret-scanning/list-alerts-for-repo', owner, repo, queryParams]);
}
