import { useQuery } from '@tanstack/react-query';

export interface ReposListForAuthenticatedUserQueryParams {
	/**
	 * @default "all"
	 */
	visibility?: 'all' | 'private' | 'public';
	/**
	 * @default "owner,collaborator,organization_member"
	 */
	affiliation?: string;
	/**
	 * @default "all"
	 */
	type?: 'all' | 'member' | 'owner' | 'private' | 'public';
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
	since?: string;
	before?: string;
}

export interface UseReposListForAuthenticatedUserQueryProps {
	queryParams: ReposListForAuthenticatedUserQueryParams;
}

export function useReposListForAuthenticatedUserQuery(
	props: UseReposListForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['repos/list-for-authenticated-user', queryParams]);
}
