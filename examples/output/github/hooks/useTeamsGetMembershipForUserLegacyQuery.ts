import { useQuery } from '@tanstack/react-query';

export interface TeamsGetMembershipForUserLegacyPathParams {
	team_id: number;
	username: string;
}

export interface UseTeamsGetMembershipForUserLegacyQueryProps
	extends TeamsGetMembershipForUserLegacyPathParams {}

export function useTeamsGetMembershipForUserLegacyQuery(
	props: UseTeamsGetMembershipForUserLegacyQueryProps,
) {
	const { team_id, username } = props;

	return useQuery(['teams/get-membership-for-user-legacy', team_id, username]);
}
