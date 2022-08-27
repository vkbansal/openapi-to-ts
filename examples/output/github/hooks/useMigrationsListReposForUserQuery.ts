import { useQuery } from '@tanstack/react-query';

export interface MigrationsListReposForUserPathParams {
	migration_id: number;
}

export interface MigrationsListReposForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseMigrationsListReposForUserQueryProps
	extends MigrationsListReposForUserPathParams {
	queryParams: MigrationsListReposForUserQueryParams;
}

export function useMigrationsListReposForUserQuery(props: UseMigrationsListReposForUserQueryProps) {
	const { migration_id, queryParams } = props;

	return useQuery(['migrations/list-repos-for-user', migration_id, queryParams]);
}
