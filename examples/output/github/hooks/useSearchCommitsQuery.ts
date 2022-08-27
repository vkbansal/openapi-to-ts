import { useQuery } from '@tanstack/react-query';

export interface SearchCommitsQueryParams {
	q: string;
	sort?: 'author-date' | 'committer-date';
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

export interface UseSearchCommitsQueryProps {
	queryParams: SearchCommitsQueryParams;
}

export function useSearchCommitsQuery(props: UseSearchCommitsQueryProps) {
	const { queryParams } = props;

	return useQuery(['search/commits', queryParams]);
}
