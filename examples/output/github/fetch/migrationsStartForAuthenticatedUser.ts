export interface MigrationsStartForAuthenticatedUserRequestBody {
	/**
	 * Exclude attributes from the API response to improve performance
	 * @example ["repositories"]
	 */
	exclude?: Array<'repositories'>;
	/**
	 * Do not include attachments in the migration
	 * @example true
	 */
	exclude_attachments?: boolean;
	/**
	 * Lock the repositories being migrated at the start of the migration
	 * @example true
	 */
	lock_repositories?: boolean;
	repositories: string[];
}

export interface MigrationsStartForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	body: MigrationsStartForAuthenticatedUserRequestBody;
}

export async function migrationsStartForAuthenticatedUser(
	props: MigrationsStartForAuthenticatedUserProps,
) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/migrations`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
