import { useQuery } from '@tanstack/react-query';

export interface ReposListCommitStatusesForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposListCommitStatusesForRefQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListCommitStatusesForRefQueryProps
	extends ReposListCommitStatusesForRefPathParams {
	queryParams: ReposListCommitStatusesForRefQueryParams;
}

export function useReposListCommitStatusesForRefQuery(
	props: UseReposListCommitStatusesForRefQueryProps,
) {
	const { owner, repo, ref, queryParams } = props;

	return useQuery(['repos/list-commit-statuses-for-ref', owner, repo, ref, queryParams]);
}
