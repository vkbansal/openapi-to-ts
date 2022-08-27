import { useQuery } from '@tanstack/react-query';

export interface ReposGetCommitPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposGetCommitQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface UseReposGetCommitQueryProps extends ReposGetCommitPathParams {
	queryParams: ReposGetCommitQueryParams;
}

export function useReposGetCommitQuery(props: UseReposGetCommitQueryProps) {
	const { owner, repo, ref, queryParams } = props;

	return useQuery(['repos/get-commit', owner, repo, ref, queryParams]);
}
