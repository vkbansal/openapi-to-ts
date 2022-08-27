import { useQuery } from '@tanstack/react-query';

export interface ActivityListStargazersForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListStargazersForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActivityListStargazersForRepoQueryProps
	extends ActivityListStargazersForRepoPathParams {
	queryParams: ActivityListStargazersForRepoQueryParams;
}

export function useActivityListStargazersForRepoQuery(
	props: UseActivityListStargazersForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['activity/list-stargazers-for-repo', owner, repo, queryParams]);
}
