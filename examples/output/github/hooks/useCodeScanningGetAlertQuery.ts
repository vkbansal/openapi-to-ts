/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

import type { AlertNumber } from '../schemas/AlertNumber';

export interface UseCodeScanningGetAlertQueryPathParams {
	owner: string;
	repo: string;
	alert_number: AlertNumber;
}

export interface UseCodeScanningGetAlertQueryProps extends UseCodeScanningGetAlertQueryPathParams {}

/**
 * Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
 *
 * **Deprecation notice**:
 * The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.
 */

export function useCodeScanningGetAlertQuery(props: UseCodeScanningGetAlertQueryProps) {
	const { owner, repo, alert_number } = props;

	return useQuery(['code-scanning/get-alert', owner, repo, alert_number]);
}
