import { useQuery } from '@tanstack/react-query';

export interface OauthAuthorizationsListAuthorizationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	client_id?: string;
}

export interface UseOauthAuthorizationsListAuthorizationsQueryProps {
	queryParams: OauthAuthorizationsListAuthorizationsQueryParams;
}

export function useOauthAuthorizationsListAuthorizationsQuery(
	props: UseOauthAuthorizationsListAuthorizationsQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['oauth-authorizations/list-authorizations', queryParams]);
}
