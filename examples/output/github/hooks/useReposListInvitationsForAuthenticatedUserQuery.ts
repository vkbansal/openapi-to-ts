/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposListInvitationsForAuthenticatedUserQueryParams {
	per_page?: number;
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
