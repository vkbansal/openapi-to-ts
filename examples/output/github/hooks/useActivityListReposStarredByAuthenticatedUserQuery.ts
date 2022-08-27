/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ActivityListReposStarredByAuthenticatedUserQueryParams {
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	per_page?: number;
	page?: number;
}

export interface UseActivityListReposStarredByAuthenticatedUserQueryProps {
	queryParams: ActivityListReposStarredByAuthenticatedUserQueryParams;
}

export function useActivityListReposStarredByAuthenticatedUserQuery(
	props: UseActivityListReposStarredByAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['activity/list-repos-starred-by-authenticated-user', queryParams]);
}
