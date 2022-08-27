import { useQuery } from '@tanstack/react-query';

export interface UsersListQueryParams {
	since?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface UseUsersListQueryProps {
	queryParams: UsersListQueryParams;
}

export function useUsersListQuery(props: UseUsersListQueryProps) {
	const { queryParams } = props;

	return useQuery(['users/list', queryParams]);
}
