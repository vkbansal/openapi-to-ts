/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface ActionsListRunnerApplicationsForOrgPathParams {
	org: string;
}

export interface UseActionsListRunnerApplicationsForOrgQueryProps
	extends ActionsListRunnerApplicationsForOrgPathParams {}

/**
 * Lists binaries for the runner application that you can download and run.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 */

export function useActionsListRunnerApplicationsForOrgQuery(
	props: UseActionsListRunnerApplicationsForOrgQueryProps,
) {
	const { org } = props;

	return useQuery(['actions/list-runner-applications-for-org', org]);
}
