import { useQuery } from '@tanstack/react-query';

export interface OauthAuthorizationsGetGrantPathParams {
	grant_id: number;
}

export interface UseOauthAuthorizationsGetGrantQueryProps
	extends OauthAuthorizationsGetGrantPathParams {}

export function useOauthAuthorizationsGetGrantQuery(
	props: UseOauthAuthorizationsGetGrantQueryProps,
) {
	const { grant_id } = props;

	return useQuery(['oauth-authorizations/get-grant', grant_id]);
}
