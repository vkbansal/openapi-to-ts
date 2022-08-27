export interface MigrationsStartForOrgPathParams {
	org: string;
}

export interface MigrationsStartForOrgRequestBody {
	exclude?: string[];
	/**
	 * Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).
	 */
	exclude_attachments?: boolean;
	/**
	 * Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
	 */
	lock_repositories?: boolean;
	/**
	 * A list of arrays indicating which repositories should be migrated.
	 */
	repositories: string[];
}

export interface MigrationsStartForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsStartForOrgPathParams {
	body: MigrationsStartForOrgRequestBody;
}

export async function migrationsStartForOrg(props: MigrationsStartForOrgProps) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/migrations`, {
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
