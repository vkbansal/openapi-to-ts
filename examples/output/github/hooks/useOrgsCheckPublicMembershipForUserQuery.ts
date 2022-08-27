import { useQuery } from '@tanstack/react-query';

export interface OrgsCheckPublicMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface UseOrgsCheckPublicMembershipForUserQueryProps
	extends OrgsCheckPublicMembershipForUserPathParams {}

export function useOrgsCheckPublicMembershipForUserQuery(
	props: UseOrgsCheckPublicMembershipForUserQueryProps,
) {
	const { org, username } = props;

	return useQuery(['orgs/check-public-membership-for-user', org, username]);
}
