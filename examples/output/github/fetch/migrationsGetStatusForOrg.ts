export interface MigrationsGetStatusForOrgQueryParams {
	exclude?: Array<'repositories'>;
}

export interface MigrationsGetStatusForOrgPathParams {
	org: string;
	migration_id: number;
}

export interface MigrationsGetStatusForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsGetStatusForOrgPathParams {
	queryParams: MigrationsGetStatusForOrgQueryParams;
}

export async function migrationsGetStatusForOrg(props: MigrationsGetStatusForOrgProps) {
	const { org, migration_id, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/migrations/${migration_id}`, {
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
