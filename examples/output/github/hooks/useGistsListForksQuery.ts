import { useQuery } from '@tanstack/react-query';

export interface GistsListForksPathParams {
	gist_id: string;
}

export interface GistsListForksQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseGistsListForksQueryProps extends GistsListForksPathParams {
	queryParams: GistsListForksQueryParams;
}

export function useGistsListForksQuery(props: UseGistsListForksQueryProps) {
	const { gist_id, queryParams } = props;

	return useQuery(['gists/list-forks', gist_id, queryParams]);
}
