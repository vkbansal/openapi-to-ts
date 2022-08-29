/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { AlertNumber } from '../schemas/AlertNumber';
import { useQuery } from '@tanstack/react-query';

export interface SecretScanningGetAlertPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface UseSecretScanningGetAlertQueryProps extends SecretScanningGetAlertPathParams {}

/**
 * Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 */

export function useSecretScanningGetAlertQuery(props: UseSecretScanningGetAlertQueryProps) {
	const { owner, repo, alert_number } = props;

	return useQuery(['secret-scanning/get-alert', owner, repo, alert_number]);
}
