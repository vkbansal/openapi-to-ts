export interface MigrationsUnlockRepoForOrgPathParams {
	org: string;
	migration_id: number;
	repo_name: string;
}

export interface MigrationsUnlockRepoForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsUnlockRepoForOrgPathParams {}

export async function migrationsUnlockRepoForOrg(props: MigrationsUnlockRepoForOrgProps) {
	const { org, migration_id, repo_name, ...rest } = props;

	const response = await fetch(`/orgs/${org}/migrations/${migration_id}/repos/${repo_name}/lock`, {
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
