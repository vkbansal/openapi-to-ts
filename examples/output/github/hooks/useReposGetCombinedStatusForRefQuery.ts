import { useQuery } from '@tanstack/react-query';

export interface ReposGetCombinedStatusForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ReposGetCombinedStatusForRefQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposGetCombinedStatusForRefQueryProps
	extends ReposGetCombinedStatusForRefPathParams {
	queryParams: ReposGetCombinedStatusForRefQueryParams;
}

export function useReposGetCombinedStatusForRefQuery(
	props: UseReposGetCombinedStatusForRefQueryProps,
) {
	const { owner, repo, ref, queryParams } = props;

	return useQuery(['repos/get-combined-status-for-ref', owner, repo, ref, queryParams]);
}
