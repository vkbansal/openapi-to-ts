import { useQuery } from '@tanstack/react-query';

export interface ActionsGetReviewsForRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface UseActionsGetReviewsForRunQueryProps extends ActionsGetReviewsForRunPathParams {}

export function useActionsGetReviewsForRunQuery(props: UseActionsGetReviewsForRunQueryProps) {
	const { owner, repo, run_id } = props;

	return useQuery(['actions/get-reviews-for-run', owner, repo, run_id]);
}
