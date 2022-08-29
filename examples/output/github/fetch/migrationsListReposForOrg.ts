/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

export interface MigrationsListReposForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsListReposForOrgPathParams {
	queryParams: MigrationsListReposForOrgQueryParams;
	paramsSerializer?: (params: MigrationsListReposForOrgQueryParams) => string;
}

/**
 * List all the repositories for this organization migration.
 */
export async function migrationsListReposForOrg(props: MigrationsListReposForOrgProps) {
	const { org, migration_id, ...rest } = props;

	return _fetcher<unknown, MigrationsListReposForOrgQueryParams, unknown>({
		path: `/orgs/${org}/migrations/${migration_id}/repositories`,
		method: 'GET',
		...rest,
	});
}
