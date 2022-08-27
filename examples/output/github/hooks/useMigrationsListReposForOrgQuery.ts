import { useQuery } from '@tanstack/react-query';

export interface MigrationsListReposForOrgPathParams {
	org: string;
	migration_id: number;
}

export interface MigrationsListReposForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseMigrationsListReposForOrgQueryProps
	extends MigrationsListReposForOrgPathParams {
	queryParams: MigrationsListReposForOrgQueryParams;
}

export function useMigrationsListReposForOrgQuery(props: UseMigrationsListReposForOrgQueryProps) {
	const { org, migration_id, queryParams } = props;

	return useQuery(['migrations/list-repos-for-org', org, migration_id, queryParams]);
}
