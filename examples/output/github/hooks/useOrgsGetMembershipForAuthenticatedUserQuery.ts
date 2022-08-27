import { useQuery } from '@tanstack/react-query';

export interface OrgsGetMembershipForAuthenticatedUserPathParams {
	org: string;
}

export interface UseOrgsGetMembershipForAuthenticatedUserQueryProps
	extends OrgsGetMembershipForAuthenticatedUserPathParams {}

export function useOrgsGetMembershipForAuthenticatedUserQuery(
	props: UseOrgsGetMembershipForAuthenticatedUserQueryProps,
) {
	const { org } = props;

	return useQuery(['orgs/get-membership-for-authenticated-user', org]);
}
