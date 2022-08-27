export interface MigrationsGetArchiveForAuthenticatedUserPathParams {
	migration_id: number;
}

export interface MigrationsGetArchiveForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsGetArchiveForAuthenticatedUserPathParams {}

export async function migrationsGetArchiveForAuthenticatedUser(
	props: MigrationsGetArchiveForAuthenticatedUserProps,
) {
	const { migration_id, ...rest } = props;

	const response = await fetch(`/user/migrations/${migration_id}/archive`, {
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
