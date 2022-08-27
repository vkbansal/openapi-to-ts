import { useQuery } from '@tanstack/react-query';

export interface AppsCheckAuthorizationPathParams {
	client_id: string;
	access_token: string;
}

export interface UseAppsCheckAuthorizationQueryProps extends AppsCheckAuthorizationPathParams {}

export function useAppsCheckAuthorizationQuery(props: UseAppsCheckAuthorizationQueryProps) {
	const { client_id, access_token } = props;

	return useQuery(['apps/check-authorization', client_id, access_token]);
}
