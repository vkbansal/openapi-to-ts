import { useQuery } from '@tanstack/react-query';

export interface ReposListForUserPathParams {
	username: string;
}

export interface ReposListForUserQueryParams {
	/**
	 * @default "owner"
	 */
	type?: 'all' | 'member' | 'owner';
	/**
	 * @default "full_name"
	 */
	sort?: 'created' | 'full_name' | 'pushed' | 'updated';
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListForUserQueryProps extends ReposListForUserPathParams {
	queryParams: ReposListForUserQueryParams;
}

export function useReposListForUserQuery(props: UseReposListForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['repos/list-for-user', username, queryParams]);
}
