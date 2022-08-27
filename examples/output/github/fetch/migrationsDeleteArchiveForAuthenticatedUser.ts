export interface MigrationsDeleteArchiveForAuthenticatedUserPathParams {
	migration_id: number;
}

export interface MigrationsDeleteArchiveForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsDeleteArchiveForAuthenticatedUserPathParams {}

export async function migrationsDeleteArchiveForAuthenticatedUser(
	props: MigrationsDeleteArchiveForAuthenticatedUserProps,
) {
	const { migration_id, ...rest } = props;

	const response = await fetch(`/user/migrations/${migration_id}/archive`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
