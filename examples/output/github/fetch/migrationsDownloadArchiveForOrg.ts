export interface MigrationsDownloadArchiveForOrgPathParams {
	org: string;
	migration_id: number;
}

export interface MigrationsDownloadArchiveForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsDownloadArchiveForOrgPathParams {}

export async function migrationsDownloadArchiveForOrg(props: MigrationsDownloadArchiveForOrgProps) {
	const { org, migration_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/migrations/${migration_id}/archive`, {
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
