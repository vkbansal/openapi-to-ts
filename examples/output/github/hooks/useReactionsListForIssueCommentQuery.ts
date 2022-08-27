import { useQuery } from '@tanstack/react-query';

export interface ReactionsListForIssueCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsListForIssueCommentQueryParams {
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

export interface UseReactionsListForIssueCommentQueryProps
	extends ReactionsListForIssueCommentPathParams {
	queryParams: ReactionsListForIssueCommentQueryParams;
}

export function useReactionsListForIssueCommentQuery(
	props: UseReactionsListForIssueCommentQueryProps,
) {
	const { owner, repo, comment_id, queryParams } = props;

	return useQuery(['reactions/list-for-issue-comment', owner, repo, comment_id, queryParams]);
}
