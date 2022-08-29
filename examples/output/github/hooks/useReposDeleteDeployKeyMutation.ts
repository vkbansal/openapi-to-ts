/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposDeleteDeployKeyMutationPathParams {
	owner: string;
	repo: string;
	key_id: number;
}

export interface UseReposDeleteDeployKeyMutationProps
	extends UseReposDeleteDeployKeyMutationPathParams {}

/**
 * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
 */

export function useReposDeleteDeployKeyMutation(props: UseReposDeleteDeployKeyMutationProps) {
	return useMutation(() => Promise.resolve());
}
