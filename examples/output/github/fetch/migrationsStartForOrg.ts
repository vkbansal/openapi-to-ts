/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

/**
 * Initiates the generation of a migration archive.
 */
export async function migrationsStartForOrg(props: MigrationsStartForOrgProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, MigrationsStartForOrgRequestBody>({
		path: `/orgs/${org}/migrations`,
		method: 'POST',
		...rest,
	});
}
