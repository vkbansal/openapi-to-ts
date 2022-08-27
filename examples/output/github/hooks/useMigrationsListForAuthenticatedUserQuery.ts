import { useQuery } from '@tanstack/react-query';

export interface MigrationsListForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseMigrationsListForAuthenticatedUserQueryProps {
	queryParams: MigrationsListForAuthenticatedUserQueryParams;
}

export function useMigrationsListForAuthenticatedUserQuery(
	props: UseMigrationsListForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['migrations/list-for-authenticated-user', queryParams]);
}
