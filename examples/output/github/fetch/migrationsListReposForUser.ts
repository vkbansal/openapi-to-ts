/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

export interface MigrationsListReposForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsListReposForUserPathParams {
	queryParams: MigrationsListReposForUserQueryParams;
	paramsSerializer?: (params: MigrationsListReposForUserQueryParams) => string;
}

/**
 * Lists all the repositories for this user migration.
 */
export async function migrationsListReposForUser(props: MigrationsListReposForUserProps) {
	const { migration_id, ...rest } = props;

	return _fetcher<unknown, MigrationsListReposForUserQueryParams, unknown>({
		path: `/user/migrations/${migration_id}/repositories`,
		method: 'GET',
		...rest,
	});
}
