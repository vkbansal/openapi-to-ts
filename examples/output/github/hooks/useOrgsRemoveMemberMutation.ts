/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseOrgsRemoveMemberMutationPathParams {
	org: string;
	username: string;
}

export interface UseOrgsRemoveMemberMutationProps extends UseOrgsRemoveMemberMutationPathParams {}

/**
 * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
 */

export function useOrgsRemoveMemberMutation(props: UseOrgsRemoveMemberMutationProps) {
	return useMutation(() => Promise.resolve());
}
