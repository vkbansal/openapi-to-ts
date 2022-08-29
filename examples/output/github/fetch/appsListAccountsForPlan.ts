/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface AppsListAccountsForPlanPathParams {
	plan_id: number;
}

export interface AppsListAccountsForPlanQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListAccountsForPlanProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsListAccountsForPlanPathParams {
	queryParams: AppsListAccountsForPlanQueryParams;
	paramsSerializer?: (params: AppsListAccountsForPlanQueryParams) => string;
}

/**
 * Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 */
export async function appsListAccountsForPlan(props: AppsListAccountsForPlanProps) {
	const { plan_id, ...rest } = props;

	return _fetcher<unknown, AppsListAccountsForPlanQueryParams, unknown>({
		path: `/marketplace_listing/plans/${plan_id}/accounts`,
		method: 'GET',
		...rest,
	});
}
