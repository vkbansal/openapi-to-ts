/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseActionsDeleteSelfHostedRunnerFromRepoMutationPathParams {
	owner: string;
	repo: string;
	runner_id: number;
}

export interface UseActionsDeleteSelfHostedRunnerFromRepoMutationProps
	extends UseActionsDeleteSelfHostedRunnerFromRepoMutationPathParams {}

/**
 * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
 *
 * You must authenticate using an access token with the `repo`
 * scope to use this endpoint.
 */

export function useActionsDeleteSelfHostedRunnerFromRepoMutation(
	props: UseActionsDeleteSelfHostedRunnerFromRepoMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
