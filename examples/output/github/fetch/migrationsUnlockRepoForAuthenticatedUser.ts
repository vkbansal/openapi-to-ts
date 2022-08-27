export interface MigrationsUnlockRepoForAuthenticatedUserPathParams {
	migration_id: number;
	repo_name: string;
}

export interface MigrationsUnlockRepoForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsUnlockRepoForAuthenticatedUserPathParams {}

export async function migrationsUnlockRepoForAuthenticatedUser(
	props: MigrationsUnlockRepoForAuthenticatedUserProps,
) {
	const { migration_id, repo_name, ...rest } = props;

	const response = await fetch(`/user/migrations/${migration_id}/repos/${repo_name}/lock`, {
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
