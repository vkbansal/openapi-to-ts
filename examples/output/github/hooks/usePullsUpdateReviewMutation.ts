/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UsePullsUpdateReviewMutationPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface UsePullsUpdateReviewMutationRequestBody {
	/**
	 * The body text of the pull request review.
	 */
	body: string;
}

export interface UsePullsUpdateReviewMutationProps extends UsePullsUpdateReviewMutationPathParams {
	body: UsePullsUpdateReviewMutationRequestBody;
}

/**
 * Update the review summary comment with new text.
 */

export function usePullsUpdateReviewMutation(props: UsePullsUpdateReviewMutationProps) {
	return useMutation(() => Promise.resolve());
}
