import { useQuery } from '@tanstack/react-query';

export interface ReactionsListForTeamDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
}

export interface ReactionsListForTeamDiscussionCommentInOrgQueryParams {
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

export interface UseReactionsListForTeamDiscussionCommentInOrgQueryProps
	extends ReactionsListForTeamDiscussionCommentInOrgPathParams {
	queryParams: ReactionsListForTeamDiscussionCommentInOrgQueryParams;
}

export function useReactionsListForTeamDiscussionCommentInOrgQuery(
	props: UseReactionsListForTeamDiscussionCommentInOrgQueryProps,
) {
	const { org, team_slug, discussion_number, comment_number, queryParams } = props;

	return useQuery([
		'reactions/list-for-team-discussion-comment-in-org',
		org,
		team_slug,
		discussion_number,
		comment_number,
		queryParams,
	]);
}
