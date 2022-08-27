import { useQuery } from '@tanstack/react-query';

export interface OrgsCheckMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface UseOrgsCheckMembershipForUserQueryProps
	extends OrgsCheckMembershipForUserPathParams {}

export function useOrgsCheckMembershipForUserQuery(props: UseOrgsCheckMembershipForUserQueryProps) {
	const { org, username } = props;

	return useQuery(['orgs/check-membership-for-user', org, username]);
}
