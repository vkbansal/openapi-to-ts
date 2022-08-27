import { useQuery } from '@tanstack/react-query';

export interface TeamsGetDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface UseTeamsGetDiscussionInOrgQueryProps extends TeamsGetDiscussionInOrgPathParams {}

export function useTeamsGetDiscussionInOrgQuery(props: UseTeamsGetDiscussionInOrgQueryProps) {
	const { org, team_slug, discussion_number } = props;

	return useQuery(['teams/get-discussion-in-org', org, team_slug, discussion_number]);
}
