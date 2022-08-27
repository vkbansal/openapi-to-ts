import { useQuery } from '@tanstack/react-query';

export interface TeamsGetDiscussionCommentLegacyPathParams {
	team_id: number;
	discussion_number: number;
	comment_number: number;
}

export interface UseTeamsGetDiscussionCommentLegacyQueryProps
	extends TeamsGetDiscussionCommentLegacyPathParams {}

export function useTeamsGetDiscussionCommentLegacyQuery(
	props: UseTeamsGetDiscussionCommentLegacyQueryProps,
) {
	const { team_id, discussion_number, comment_number } = props;

	return useQuery([
		'teams/get-discussion-comment-legacy',
		team_id,
		discussion_number,
		comment_number,
	]);
}
