/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UsePullsDeleteReviewCommentMutationPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface UsePullsDeleteReviewCommentMutationProps
	extends UsePullsDeleteReviewCommentMutationPathParams {}

/**
 * Deletes a review comment.
 */

export function usePullsDeleteReviewCommentMutation(
	props: UsePullsDeleteReviewCommentMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
