import { useQuery } from '@tanstack/react-query';

export interface GitListMatchingRefsPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface GitListMatchingRefsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseGitListMatchingRefsQueryProps extends GitListMatchingRefsPathParams {
	queryParams: GitListMatchingRefsQueryParams;
}

export function useGitListMatchingRefsQuery(props: UseGitListMatchingRefsQueryProps) {
	const { owner, repo, ref, queryParams } = props;

	return useQuery(['git/list-matching-refs', owner, repo, ref, queryParams]);
}
