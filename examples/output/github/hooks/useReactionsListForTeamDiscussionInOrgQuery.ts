import { useQuery } from '@tanstack/react-query';

export interface ReactionsListForTeamDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface ReactionsListForTeamDiscussionInOrgQueryParams {
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

export interface UseReactionsListForTeamDiscussionInOrgQueryProps
	extends ReactionsListForTeamDiscussionInOrgPathParams {
	queryParams: ReactionsListForTeamDiscussionInOrgQueryParams;
}

export function useReactionsListForTeamDiscussionInOrgQuery(
	props: UseReactionsListForTeamDiscussionInOrgQueryProps,
) {
	const { org, team_slug, discussion_number, queryParams } = props;

	return useQuery([
		'reactions/list-for-team-discussion-in-org',
		org,
		team_slug,
		discussion_number,
		queryParams,
	]);
}
