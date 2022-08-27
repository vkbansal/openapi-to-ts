import { useQuery } from '@tanstack/react-query';

export interface OrgsListForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseOrgsListForAuthenticatedUserQueryProps {
	queryParams: OrgsListForAuthenticatedUserQueryParams;
}

export function useOrgsListForAuthenticatedUserQuery(
	props: UseOrgsListForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['orgs/list-for-authenticated-user', queryParams]);
}
