import { useQuery } from '@tanstack/react-query';

export interface ReposListInvitationsForAuthenticatedUserQueryParams {
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
	queryParams: ReposListInvitationsForAuthenticatedUserQueryParams;
}

export function useReposListInvitationsForAuthenticatedUserQuery(
	props: UseReposListInvitationsForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['repos/list-invitations-for-authenticated-user', queryParams]);
}
