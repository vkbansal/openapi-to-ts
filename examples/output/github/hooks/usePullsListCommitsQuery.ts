import { useQuery } from '@tanstack/react-query';

export interface PullsListCommitsPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListCommitsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsePullsListCommitsQueryProps extends PullsListCommitsPathParams {
	queryParams: PullsListCommitsQueryParams;
}

export function usePullsListCommitsQuery(props: UsePullsListCommitsQueryProps) {
	const { owner, repo, pull_number, queryParams } = props;

	return useQuery(['pulls/list-commits', owner, repo, pull_number, queryParams]);
}
