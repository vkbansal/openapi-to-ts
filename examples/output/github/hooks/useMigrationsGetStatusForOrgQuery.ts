import { useQuery } from '@tanstack/react-query';

export interface MigrationsGetStatusForOrgPathParams {
	org: string;
	migration_id: number;
}

export interface MigrationsGetStatusForOrgQueryParams {
	exclude?: Array<'repositories'>;
}

export interface UseMigrationsGetStatusForOrgQueryProps
	extends MigrationsGetStatusForOrgPathParams {
	queryParams: MigrationsGetStatusForOrgQueryParams;
}

export function useMigrationsGetStatusForOrgQuery(props: UseMigrationsGetStatusForOrgQueryProps) {
	const { org, migration_id, queryParams } = props;

	return useQuery(['migrations/get-status-for-org', org, migration_id, queryParams]);
}
