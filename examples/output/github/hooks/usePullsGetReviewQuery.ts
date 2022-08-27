import { useQuery } from '@tanstack/react-query';

export interface PullsGetReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface UsePullsGetReviewQueryProps extends PullsGetReviewPathParams {}

export function usePullsGetReviewQuery(props: UsePullsGetReviewQueryProps) {
	const { owner, repo, pull_number, review_id } = props;

	return useQuery(['pulls/get-review', owner, repo, pull_number, review_id]);
}
