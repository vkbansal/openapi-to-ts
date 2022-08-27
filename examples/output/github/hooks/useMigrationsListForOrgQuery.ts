/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface MigrationsListForOrgPathParams {
	org: string;
}

export interface MigrationsListForOrgQueryParams {
	per_page?: number;
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
