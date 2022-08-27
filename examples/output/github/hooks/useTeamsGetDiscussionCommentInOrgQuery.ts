import { useQuery } from '@tanstack/react-query';

export interface TeamsGetDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
}

export interface UseTeamsGetDiscussionCommentInOrgQueryProps
	extends TeamsGetDiscussionCommentInOrgPathParams {}

export function useTeamsGetDiscussionCommentInOrgQuery(
	props: UseTeamsGetDiscussionCommentInOrgQueryProps,
) {
	const { org, team_slug, discussion_number, comment_number } = props;

	return useQuery([
		'teams/get-discussion-comment-in-org',
		org,
		team_slug,
		discussion_number,
		comment_number,
	]);
}
