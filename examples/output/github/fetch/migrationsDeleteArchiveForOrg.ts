export interface MigrationsDeleteArchiveForOrgPathParams {
	org: string;
	migration_id: number;
}

export interface MigrationsDeleteArchiveForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsDeleteArchiveForOrgPathParams {}

export async function migrationsDeleteArchiveForOrg(props: MigrationsDeleteArchiveForOrgProps) {
	const { org, migration_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/migrations/${migration_id}/archive`, {
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
