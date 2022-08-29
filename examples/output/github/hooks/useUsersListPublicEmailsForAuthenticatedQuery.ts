/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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

/**
 * Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
 */

export function useUsersListPublicEmailsForAuthenticatedQuery(
	props: UseUsersListPublicEmailsForAuthenticatedQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['users/list-public-emails-for-authenticated', queryParams]);
}
