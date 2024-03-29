/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposListInvitationsForAuthenticatedUserQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListInvitationsForAuthenticatedUserQueryProps {
	queryParams: UseReposListInvitationsForAuthenticatedUserQueryQueryParams;
}

/**
 * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
 */

export function useReposListInvitationsForAuthenticatedUserQuery(
	props: UseReposListInvitationsForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['repos/list-invitations-for-authenticated-user', queryParams]);
}
