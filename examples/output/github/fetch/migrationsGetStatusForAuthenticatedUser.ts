export interface MigrationsGetStatusForAuthenticatedUserQueryParams {
	exclude?: string[];
}

export interface MigrationsGetStatusForAuthenticatedUserPathParams {
	migration_id: number;
}

export interface MigrationsGetStatusForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsGetStatusForAuthenticatedUserPathParams {
	queryParams: MigrationsGetStatusForAuthenticatedUserQueryParams;
}

export async function migrationsGetStatusForAuthenticatedUser(
	props: MigrationsGetStatusForAuthenticatedUserProps,
) {
	const { migration_id, queryParams, ...rest } = props;

	const response = await fetch(`/user/migrations/${migration_id}`, {
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
