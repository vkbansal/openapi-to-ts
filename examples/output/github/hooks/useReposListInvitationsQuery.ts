import { useQuery } from '@tanstack/react-query';

export interface ReposListInvitationsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListInvitationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListInvitationsQueryProps extends ReposListInvitationsPathParams {
	queryParams: ReposListInvitationsQueryParams;
}

export function useReposListInvitationsQuery(props: UseReposListInvitationsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-invitations', owner, repo, queryParams]);
}
