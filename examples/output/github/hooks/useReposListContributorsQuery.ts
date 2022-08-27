import { useQuery } from '@tanstack/react-query';

export interface ReposListContributorsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListContributorsQueryParams {
	anon?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListContributorsQueryProps extends ReposListContributorsPathParams {
	queryParams: ReposListContributorsQueryParams;
}

export function useReposListContributorsQuery(props: UseReposListContributorsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-contributors', owner, repo, queryParams]);
}
