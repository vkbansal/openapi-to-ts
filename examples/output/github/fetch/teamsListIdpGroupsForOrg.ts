/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsListIdpGroupsForOrgPathParams {
	org: string;
}

export interface TeamsListIdpGroupsForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	page?: string;
}

export interface TeamsListIdpGroupsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListIdpGroupsForOrgPathParams {
	queryParams: TeamsListIdpGroupsForOrgQueryParams;
	paramsSerializer?: (params: TeamsListIdpGroupsForOrgQueryParams) => string;
}

/**
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * List IdP groups available in an organization. You can limit your page results using the `per_page` parameter. GitHub generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see "[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89)."
 *
 * The `per_page` parameter provides pagination for a list of IdP groups the authenticated user can access in an organization. For example, if the user `octocat` wants to see two groups per page in `octo-org` via cURL, it would look like this:
 */
export async function teamsListIdpGroupsForOrg(props: TeamsListIdpGroupsForOrgProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, TeamsListIdpGroupsForOrgQueryParams, unknown>({
		path: `/orgs/${org}/team-sync/groups`,
		method: 'GET',
		...rest,
	});
}
