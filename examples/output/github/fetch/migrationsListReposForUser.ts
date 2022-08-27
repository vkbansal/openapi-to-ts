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

export interface MigrationsListReposForUserPathParams {
	migration_id: number;
}

export interface MigrationsListReposForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsListReposForUserPathParams {
	queryParams: MigrationsListReposForUserQueryParams;
}

export async function migrationsListReposForUser(props: MigrationsListReposForUserProps) {
	const { migration_id, queryParams, ...rest } = props;

	const response = await fetch(`/user/migrations/${migration_id}/repositories`, {
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
