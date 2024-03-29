/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseMigrationsStartForOrgMutationPathParams {
	org: string;
}

export interface UseMigrationsStartForOrgMutationRequestBody {
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

export interface UseMigrationsStartForOrgMutationProps
	extends UseMigrationsStartForOrgMutationPathParams {
	body: UseMigrationsStartForOrgMutationRequestBody;
}

/**
 * Initiates the generation of a migration archive.
 */

export function useMigrationsStartForOrgMutation(props: UseMigrationsStartForOrgMutationProps) {
	return useMutation(() => Promise.resolve());
}
