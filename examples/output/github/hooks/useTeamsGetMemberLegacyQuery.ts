import { useQuery } from '@tanstack/react-query';

export interface TeamsGetMemberLegacyPathParams {
	team_id: number;
	username: string;
}

export interface UseTeamsGetMemberLegacyQueryProps extends TeamsGetMemberLegacyPathParams {}

export function useTeamsGetMemberLegacyQuery(props: UseTeamsGetMemberLegacyQueryProps) {
	const { team_id, username } = props;

	return useQuery(['teams/get-member-legacy', team_id, username]);
}
