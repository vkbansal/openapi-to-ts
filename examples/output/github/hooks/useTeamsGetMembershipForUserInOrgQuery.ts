import { useQuery } from '@tanstack/react-query';

export interface TeamsGetMembershipForUserInOrgPathParams {
	org: string;
	team_slug: string;
	username: string;
}

export interface UseTeamsGetMembershipForUserInOrgQueryProps
	extends TeamsGetMembershipForUserInOrgPathParams {}

export function useTeamsGetMembershipForUserInOrgQuery(
	props: UseTeamsGetMembershipForUserInOrgQueryProps,
) {
	const { org, team_slug, username } = props;

	return useQuery(['teams/get-membership-for-user-in-org', org, team_slug, username]);
}
