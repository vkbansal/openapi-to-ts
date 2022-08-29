/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface MigrationsCancelImportPathParams {
	owner: string;
	repo: string;
}

export interface MigrationsCancelImportProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsCancelImportPathParams {}

/**
 * Stop an import for a repository.
 */
export async function migrationsCancelImport(props: MigrationsCancelImportProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/import`,
		method: 'DELETE',
		...rest,
	});
}
