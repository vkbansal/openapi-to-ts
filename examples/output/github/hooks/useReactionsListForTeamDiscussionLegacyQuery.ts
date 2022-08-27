import { useQuery } from '@tanstack/react-query';

export interface ReactionsListForTeamDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface ReactionsListForTeamDiscussionLegacyQueryParams {
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

export interface UseReactionsListForTeamDiscussionLegacyQueryProps
	extends ReactionsListForTeamDiscussionLegacyPathParams {
	queryParams: ReactionsListForTeamDiscussionLegacyQueryParams;
}

export function useReactionsListForTeamDiscussionLegacyQuery(
	props: UseReactionsListForTeamDiscussionLegacyQueryProps,
) {
	const { team_id, discussion_number, queryParams } = props;

	return useQuery([
		'reactions/list-for-team-discussion-legacy',
		team_id,
		discussion_number,
		queryParams,
	]);
}
