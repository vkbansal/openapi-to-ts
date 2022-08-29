/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface AppsListPlansStubbedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListPlansStubbedProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListPlansStubbedQueryParams;
	paramsSerializer?: (params: AppsListPlansStubbedQueryParams) => string;
}

/**
 * Lists all plans that are part of your GitHub Marketplace listing.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 */
export async function appsListPlansStubbed(props: AppsListPlansStubbedProps) {
	const { ...rest } = props;

	return _fetcher<unknown, AppsListPlansStubbedQueryParams, unknown>({
		path: `/marketplace_listing/stubbed/plans`,
		method: 'GET',
		...rest,
	});
}
