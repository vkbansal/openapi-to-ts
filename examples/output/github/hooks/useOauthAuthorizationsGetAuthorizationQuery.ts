import { useQuery } from '@tanstack/react-query';

export interface OauthAuthorizationsGetAuthorizationPathParams {
	authorization_id: number;
}

export interface UseOauthAuthorizationsGetAuthorizationQueryProps
	extends OauthAuthorizationsGetAuthorizationPathParams {}

export function useOauthAuthorizationsGetAuthorizationQuery(
	props: UseOauthAuthorizationsGetAuthorizationQueryProps,
) {
	const { authorization_id } = props;

	return useQuery(['oauth-authorizations/get-authorization', authorization_id]);
}
