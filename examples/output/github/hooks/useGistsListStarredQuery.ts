import { useQuery } from '@tanstack/react-query';

export interface GistsListStarredQueryParams {
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseGistsListStarredQueryProps {
	queryParams: GistsListStarredQueryParams;
}

export function useGistsListStarredQuery(props: UseGistsListStarredQueryProps) {
	const { queryParams } = props;

	return useQuery(['gists/list-starred', queryParams]);
}
