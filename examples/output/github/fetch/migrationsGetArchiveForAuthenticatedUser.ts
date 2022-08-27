/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
