/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseGistsForkMutationPathParams {
	gist_id: string;
}

export interface UseGistsForkMutationProps extends UseGistsForkMutationPathParams {}

/**
 * **Note**: This was previously `/gists/:gist_id/fork`.
 */

export function useGistsForkMutation(props: UseGistsForkMutationProps) {
	return useMutation(() => Promise.resolve());
}
