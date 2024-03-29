/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseTeamsListChildInOrgQueryPathParams {
	org: string;
	team_slug: string;
}

export interface UseTeamsListChildInOrgQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListChildInOrgQueryProps extends UseTeamsListChildInOrgQueryPathParams {
	queryParams: UseTeamsListChildInOrgQueryQueryParams;
}

/**
 * Lists the child teams of the team specified by `{team_slug}`.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
 */

export function useTeamsListChildInOrgQuery(props: UseTeamsListChildInOrgQueryProps) {
	const { org, team_slug, queryParams } = props;

	return useQuery(['teams/list-child-in-org', org, team_slug, queryParams]);
}
