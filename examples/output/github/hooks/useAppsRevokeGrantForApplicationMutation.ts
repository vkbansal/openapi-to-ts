/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseAppsRevokeGrantForApplicationMutationPathParams {
	client_id: string;
	access_token: string;
}

export interface UseAppsRevokeGrantForApplicationMutationProps
	extends UseAppsRevokeGrantForApplicationMutationPathParams {}

/**
 * **Deprecation Notice:** GitHub will discontinue OAuth endpoints that contain `access_token` in the path parameter. We have introduced new endpoints that allow you to securely manage tokens for OAuth Apps by moving `access_token` to the request body. For more information, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).
 *
 * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.
 *
 * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub](https://github.com/settings/applications#authorized).
 * @deprecated
 */

export function useAppsRevokeGrantForApplicationMutation(
	props: UseAppsRevokeGrantForApplicationMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
