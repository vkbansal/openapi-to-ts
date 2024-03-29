/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseAppsListPlansStubbedQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListPlansStubbedQueryProps {
	queryParams: UseAppsListPlansStubbedQueryQueryParams;
}

/**
 * Lists all plans that are part of your GitHub Marketplace listing.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 */

export function useAppsListPlansStubbedQuery(props: UseAppsListPlansStubbedQueryProps) {
	const { queryParams } = props;

	return useQuery(['apps/list-plans-stubbed', queryParams]);
}
