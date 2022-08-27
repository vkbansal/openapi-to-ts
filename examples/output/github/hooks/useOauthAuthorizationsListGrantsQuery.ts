import { useQuery } from '@tanstack/react-query';

export interface OauthAuthorizationsListGrantsQueryParams {
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

export interface UseOauthAuthorizationsListGrantsQueryProps {
	queryParams: OauthAuthorizationsListGrantsQueryParams;
}

export function useOauthAuthorizationsListGrantsQuery(
	props: UseOauthAuthorizationsListGrantsQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['oauth-authorizations/list-grants', queryParams]);
}
