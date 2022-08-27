import { useQuery } from '@tanstack/react-query';

export interface ReactionsListForCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsListForCommitCommentQueryParams {
	content?: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReactionsListForCommitCommentQueryProps
	extends ReactionsListForCommitCommentPathParams {
	queryParams: ReactionsListForCommitCommentQueryParams;
}

export function useReactionsListForCommitCommentQuery(
	props: UseReactionsListForCommitCommentQueryProps,
) {
	const { owner, repo, comment_id, queryParams } = props;

	return useQuery(['reactions/list-for-commit-comment', owner, repo, comment_id, queryParams]);
}
