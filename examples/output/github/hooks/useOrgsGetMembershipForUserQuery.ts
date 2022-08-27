import { useQuery } from '@tanstack/react-query';

export interface OrgsGetMembershipForUserPathParams {
	org: string;
	username: string;
}

export interface UseOrgsGetMembershipForUserQueryProps extends OrgsGetMembershipForUserPathParams {}

export function useOrgsGetMembershipForUserQuery(props: UseOrgsGetMembershipForUserQueryProps) {
	const { org, username } = props;

	return useQuery(['orgs/get-membership-for-user', org, username]);
}
