import { useQuery } from '@tanstack/react-query';

export interface SearchCodeQueryParams {
	q: string;
	sort?: 'indexed';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseSearchCodeQueryProps {
	queryParams: SearchCodeQueryParams;
}

export function useSearchCodeQuery(props: UseSearchCodeQueryProps) {
	const { queryParams } = props;

	return useQuery(['search/code', queryParams]);
}
