/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface OauthAuthorizationsListAuthorizationsQueryParams {
	per_page?: number;
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