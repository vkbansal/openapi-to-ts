import { useQuery } from '@tanstack/react-query';

export interface GistsListQueryParams {
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

export interface UseGistsListQueryProps {
	queryParams: GistsListQueryParams;
}

export function useGistsListQuery(props: UseGistsListQueryProps) {
	const { queryParams } = props;

	return useQuery(['gists/list', queryParams]);
}
