import { useQuery } from '@tanstack/react-query';

export interface TeamsListDiscussionCommentsInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface TeamsListDiscussionCommentsInOrgQueryParams {
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListDiscussionCommentsInOrgQueryProps
	extends TeamsListDiscussionCommentsInOrgPathParams {
	queryParams: TeamsListDiscussionCommentsInOrgQueryParams;
}

export function useTeamsListDiscussionCommentsInOrgQuery(
	props: UseTeamsListDiscussionCommentsInOrgQueryProps,
) {
	const { org, team_slug, discussion_number, queryParams } = props;

	return useQuery([
		'teams/list-discussion-comments-in-org',
		org,
		team_slug,
		discussion_number,
		queryParams,
	]);
}
