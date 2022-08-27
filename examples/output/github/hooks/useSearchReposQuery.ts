import { useQuery } from '@tanstack/react-query';

export interface SearchReposQueryParams {
	q: string;
	sort?: 'forks' | 'help-wanted-issues' | 'stars' | 'updated';
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

export interface UseSearchReposQueryProps {
	queryParams: SearchReposQueryParams;
}

export function useSearchReposQuery(props: UseSearchReposQueryProps) {
	const { queryParams } = props;

	return useQuery(['search/repos', queryParams]);
}
