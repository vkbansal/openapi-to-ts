/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UsePullsDeletePendingReviewMutationPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface UsePullsDeletePendingReviewMutationProps
	extends UsePullsDeletePendingReviewMutationPathParams {}

/**
 *
 */

export function usePullsDeletePendingReviewMutation(
	props: UsePullsDeletePendingReviewMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
