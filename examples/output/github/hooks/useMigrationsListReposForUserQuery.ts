/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseMigrationsListReposForUserQueryPathParams {
	migration_id: number;
}

export interface UseMigrationsListReposForUserQueryQueryParams {
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
	extends UseMigrationsListReposForUserQueryPathParams {
	queryParams: UseMigrationsListReposForUserQueryQueryParams;
}

/**
 * Lists all the repositories for this user migration.
 */

export function useMigrationsListReposForUserQuery(props: UseMigrationsListReposForUserQueryProps) {
	const { migration_id, queryParams } = props;

	return useQuery(['migrations/list-repos-for-user', migration_id, queryParams]);
}
