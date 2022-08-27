import { useQuery } from '@tanstack/react-query';

export interface ReposListReleaseAssetsPathParams {
	owner: string;
	repo: string;
	release_id: number;
}

export interface ReposListReleaseAssetsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListReleaseAssetsQueryProps extends ReposListReleaseAssetsPathParams {
	queryParams: ReposListReleaseAssetsQueryParams;
}

export function useReposListReleaseAssetsQuery(props: UseReposListReleaseAssetsQueryProps) {
	const { owner, repo, release_id, queryParams } = props;

	return useQuery(['repos/list-release-assets', owner, repo, release_id, queryParams]);
}
