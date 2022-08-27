import { useQuery } from '@tanstack/react-query';

export interface ReposListReleasesPathParams {
	owner: string;
	repo: string;
}

export interface ReposListReleasesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListReleasesQueryProps extends ReposListReleasesPathParams {
	queryParams: ReposListReleasesQueryParams;
}

export function useReposListReleasesQuery(props: UseReposListReleasesQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-releases', owner, repo, queryParams]);
}
