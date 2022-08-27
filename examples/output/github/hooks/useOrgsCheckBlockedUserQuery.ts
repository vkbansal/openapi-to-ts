import { useQuery } from '@tanstack/react-query';

export interface OrgsCheckBlockedUserPathParams {
	org: string;
	username: string;
}

export interface UseOrgsCheckBlockedUserQueryProps extends OrgsCheckBlockedUserPathParams {}

export function useOrgsCheckBlockedUserQuery(props: UseOrgsCheckBlockedUserQueryProps) {
	const { org, username } = props;

	return useQuery(['orgs/check-blocked-user', org, username]);
}
