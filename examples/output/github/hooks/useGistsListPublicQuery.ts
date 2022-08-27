import { useQuery } from '@tanstack/react-query';

export interface GistsListPublicQueryParams {
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

export interface UseGistsListPublicQueryProps {
	queryParams: GistsListPublicQueryParams;
}

export function useGistsListPublicQuery(props: UseGistsListPublicQueryProps) {
	const { queryParams } = props;

	return useQuery(['gists/list-public', queryParams]);
}
