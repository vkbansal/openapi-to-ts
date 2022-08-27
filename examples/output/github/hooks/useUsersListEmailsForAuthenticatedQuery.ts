import { useQuery } from '@tanstack/react-query';

export interface UsersListEmailsForAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListEmailsForAuthenticatedQueryProps {
	queryParams: UsersListEmailsForAuthenticatedQueryParams;
}

export function useUsersListEmailsForAuthenticatedQuery(
	props: UseUsersListEmailsForAuthenticatedQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['users/list-emails-for-authenticated', queryParams]);
}
