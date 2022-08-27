/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface MigrationsListReposForOrgQueryParams {
	per_page?: number;
	page?: number;
}

export interface MigrationsListReposForOrgPathParams {
	org: string;
	migration_id: number;
}

export interface MigrationsListReposForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsListReposForOrgPathParams {
	queryParams: MigrationsListReposForOrgQueryParams;
}

export async function migrationsListReposForOrg(props: MigrationsListReposForOrgProps) {
	const { org, migration_id, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/migrations/${migration_id}/repositories`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}