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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
