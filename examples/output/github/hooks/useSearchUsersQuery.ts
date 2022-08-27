import { useQuery } from '@tanstack/react-query';

export interface SearchUsersQueryParams {
	q: string;
	sort?: 'followers' | 'joined' | 'repositories';
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

export interface UseSearchUsersQueryProps {
	queryParams: SearchUsersQueryParams;
}

export function useSearchUsersQuery(props: UseSearchUsersQueryProps) {
	const { queryParams } = props;

	return useQuery(['search/users', queryParams]);
}
