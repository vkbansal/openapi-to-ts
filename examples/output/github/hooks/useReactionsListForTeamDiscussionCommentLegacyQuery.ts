import { useQuery } from '@tanstack/react-query';

export interface ReactionsListForTeamDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface ReactionsListForTeamDiscussionCommentLegacyQueryParams {
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

export interface UseReactionsListForTeamDiscussionCommentLegacyQueryProps
	extends ReactionsListForTeamDiscussionCommentLegacyPathParams {
	queryParams: ReactionsListForTeamDiscussionCommentLegacyQueryParams;
}

export function useReactionsListForTeamDiscussionCommentLegacyQuery(
	props: UseReactionsListForTeamDiscussionCommentLegacyQueryProps,
) {
	const { team_id, discussion_number, comment_number, queryParams } = props;

	return useQuery([
		'reactions/list-for-team-discussion-comment-legacy',
		team_id,
		discussion_number,
		comment_number,
		queryParams,
	]);
}
