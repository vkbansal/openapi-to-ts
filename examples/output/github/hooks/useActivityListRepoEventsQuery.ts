import { useQuery } from '@tanstack/react-query';

export interface ActivityListRepoEventsPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListRepoEventsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListRepoEventsQueryProps extends ActivityListRepoEventsPathParams {
	queryParams: ActivityListRepoEventsQueryParams;
}

export function useActivityListRepoEventsQuery(props: UseActivityListRepoEventsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['activity/list-repo-events', owner, repo, queryParams]);
}
