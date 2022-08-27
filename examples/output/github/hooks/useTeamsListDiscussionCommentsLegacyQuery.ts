import { useQuery } from '@tanstack/react-query';

export interface TeamsListDiscussionCommentsLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface TeamsListDiscussionCommentsLegacyQueryParams {
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

export interface UseTeamsListDiscussionCommentsLegacyQueryProps
	extends TeamsListDiscussionCommentsLegacyPathParams {
	queryParams: TeamsListDiscussionCommentsLegacyQueryParams;
}

export function useTeamsListDiscussionCommentsLegacyQuery(
	props: UseTeamsListDiscussionCommentsLegacyQueryProps,
) {
	const { team_id, discussion_number, queryParams } = props;

	return useQuery([
		'teams/list-discussion-comments-legacy',
		team_id,
		discussion_number,
		queryParams,
	]);
}
