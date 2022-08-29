/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsListChildInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListChildInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListChildInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListChildInOrgPathParams {
	queryParams: TeamsListChildInOrgQueryParams;
	paramsSerializer?: (params: TeamsListChildInOrgQueryParams) => string;
}

/**
 * Lists the child teams of the team specified by `{team_slug}`.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
 */
export async function teamsListChildInOrg(props: TeamsListChildInOrgProps) {
	const { org, team_slug, ...rest } = props;

	return _fetcher<unknown, TeamsListChildInOrgQueryParams, unknown>({
		path: `/orgs/${org}/teams/${team_slug}/teams`,
		method: 'GET',
		...rest,
	});
}
