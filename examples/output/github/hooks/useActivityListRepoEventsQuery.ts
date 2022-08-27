/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ActivityListRepoEventsPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListRepoEventsQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseActivityListRepoEventsQueryProps extends ActivityListRepoEventsPathParams {
	queryParams: ActivityListRepoEventsQueryParams;
}

export function useActivityListRepoEventsQuery(props: UseActivityListRepoEventsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['activity/list-repo-events', owner, repo, queryParams]);
}
