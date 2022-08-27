import { useQuery } from '@tanstack/react-query';

export interface PullsListFilesPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListFilesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsePullsListFilesQueryProps extends PullsListFilesPathParams {
	queryParams: PullsListFilesQueryParams;
}

export function usePullsListFilesQuery(props: UsePullsListFilesQueryProps) {
	const { owner, repo, pull_number, queryParams } = props;

	return useQuery(['pulls/list-files', owner, repo, pull_number, queryParams]);
}
