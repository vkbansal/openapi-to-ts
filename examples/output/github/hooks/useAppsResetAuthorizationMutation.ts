/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseAppsResetAuthorizationMutationPathParams {
	client_id: string;
	access_token: string;
}

export interface UseAppsResetAuthorizationMutationProps
	extends UseAppsResetAuthorizationMutationPathParams {}

/**
 * **Deprecation Notice:** GitHub will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
 *
 * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
 * @deprecated
 */

export function useAppsResetAuthorizationMutation(props: UseAppsResetAuthorizationMutationProps) {
	return useMutation(() => Promise.resolve());
}
