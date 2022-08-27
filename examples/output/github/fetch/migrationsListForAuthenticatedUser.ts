export interface MigrationsListForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface MigrationsListForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: MigrationsListForAuthenticatedUserQueryParams;
}

export async function migrationsListForAuthenticatedUser(
	props: MigrationsListForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/migrations`, {
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
