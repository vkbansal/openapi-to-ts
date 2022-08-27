import { useQuery } from '@tanstack/react-query';

export interface UsersListPublicEmailsForAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListPublicEmailsForAuthenticatedQueryProps {
	queryParams: UsersListPublicEmailsForAuthenticatedQueryParams;
}

export function useUsersListPublicEmailsForAuthenticatedQuery(
	props: UseUsersListPublicEmailsForAuthenticatedQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['users/list-public-emails-for-authenticated', queryParams]);
}
