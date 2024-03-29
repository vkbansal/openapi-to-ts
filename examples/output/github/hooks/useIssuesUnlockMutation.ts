/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseIssuesUnlockMutationPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface UseIssuesUnlockMutationProps extends UseIssuesUnlockMutationPathParams {}

/**
 * Users with push access can unlock an issue's conversation.
 */

export function useIssuesUnlockMutation(props: UseIssuesUnlockMutationProps) {
	return useMutation(() => Promise.resolve());
}
