export interface MigrationsListForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	exclude?: Array<'repositories'>;
}

export interface MigrationsListForOrgPathParams {
	org: string;
}

export interface MigrationsListForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsListForOrgPathParams {
	queryParams: MigrationsListForOrgQueryParams;
}

export async function migrationsListForOrg(props: MigrationsListForOrgProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/migrations`, {
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
