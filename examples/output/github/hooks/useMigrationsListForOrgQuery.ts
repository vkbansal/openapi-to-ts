import { useQuery } from '@tanstack/react-query';

export interface MigrationsListForOrgPathParams {
	org: string;
}

export interface MigrationsListForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	exclude?: Array<'repositories'>;
}

export interface UseMigrationsListForOrgQueryProps extends MigrationsListForOrgPathParams {
	queryParams: MigrationsListForOrgQueryParams;
}

export function useMigrationsListForOrgQuery(props: UseMigrationsListForOrgQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['migrations/list-for-org', org, queryParams]);
}
