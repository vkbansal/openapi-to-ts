/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsListDiscussionsLegacyPathParams {
	team_id: number;
}

export interface TeamsListDiscussionsLegacyQueryParams {
	/**
	 * @default "desc"
	 */
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

export interface TeamsListDiscussionsLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListDiscussionsLegacyPathParams {
	queryParams: TeamsListDiscussionsLegacyQueryParams;
	paramsSerializer?: (params: TeamsListDiscussionsLegacyQueryParams) => string;
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/rest/reference/teams#list-discussions) endpoint.
 *
 * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @deprecated
 */
export async function teamsListDiscussionsLegacy(props: TeamsListDiscussionsLegacyProps) {
	const { team_id, ...rest } = props;

	return _fetcher<unknown, TeamsListDiscussionsLegacyQueryParams, unknown>({
		path: `/teams/${team_id}/discussions`,
		method: 'GET',
		...rest,
	});
}
