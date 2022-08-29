/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseActionsListSelfHostedRunnersForOrgQueryPathParams {
	org: string;
}

export interface UseActionsListSelfHostedRunnersForOrgQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListSelfHostedRunnersForOrgQueryProps
	extends UseActionsListSelfHostedRunnersForOrgQueryPathParams {
	queryParams: UseActionsListSelfHostedRunnersForOrgQueryQueryParams;
}

/**
 * Lists all self-hosted runners configured in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 */

export function useActionsListSelfHostedRunnersForOrgQuery(
	props: UseActionsListSelfHostedRunnersForOrgQueryProps,
) {
	const { org, queryParams } = props;

	return useQuery(['actions/list-self-hosted-runners-for-org', org, queryParams]);
}
