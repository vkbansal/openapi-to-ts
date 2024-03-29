/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseMigrationsUnlockRepoForOrgMutationPathParams {
	org: string;
	migration_id: number;
	repo_name: string;
}

export interface UseMigrationsUnlockRepoForOrgMutationProps
	extends UseMigrationsUnlockRepoForOrgMutationPathParams {}

/**
 * Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/reference/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
 */

export function useMigrationsUnlockRepoForOrgMutation(
	props: UseMigrationsUnlockRepoForOrgMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
