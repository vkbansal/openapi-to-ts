import { useQuery } from '@tanstack/react-query';

export interface GistsListCommitsPathParams {
	gist_id: string;
}

export interface GistsListCommitsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseGistsListCommitsQueryProps extends GistsListCommitsPathParams {
	queryParams: GistsListCommitsQueryParams;
}

export function useGistsListCommitsQuery(props: UseGistsListCommitsQueryProps) {
	const { gist_id, queryParams } = props;

	return useQuery(['gists/list-commits', gist_id, queryParams]);
}
