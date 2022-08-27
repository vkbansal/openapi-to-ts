import { useQuery } from '@tanstack/react-query';

export interface TeamsGetDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface UseTeamsGetDiscussionLegacyQueryProps extends TeamsGetDiscussionLegacyPathParams {}

export function useTeamsGetDiscussionLegacyQuery(props: UseTeamsGetDiscussionLegacyQueryProps) {
	const { team_id, discussion_number } = props;

	return useQuery(['teams/get-discussion-legacy', team_id, discussion_number]);
}
