import { useQuery } from '@tanstack/react-query';

export interface PullsGetReviewCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface UsePullsGetReviewCommentQueryProps extends PullsGetReviewCommentPathParams {}

export function usePullsGetReviewCommentQuery(props: UsePullsGetReviewCommentQueryProps) {
	const { owner, repo, comment_id } = props;

	return useQuery(['pulls/get-review-comment', owner, repo, comment_id]);
}
