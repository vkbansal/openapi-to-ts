import { useQuery } from '@tanstack/react-query';

export interface OrgsListBlockedUsersPathParams {
	org: string;
}

export interface UseOrgsListBlockedUsersQueryProps extends OrgsListBlockedUsersPathParams {}

export function useOrgsListBlockedUsersQuery(props: UseOrgsListBlockedUsersQueryProps) {
	const { org } = props;

	return useQuery(['orgs/list-blocked-users', org]);
}
