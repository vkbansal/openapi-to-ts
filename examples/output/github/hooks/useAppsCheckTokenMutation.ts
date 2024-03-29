/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseAppsCheckTokenMutationPathParams {
	client_id: string;
}

export interface UseAppsCheckTokenMutationRequestBody {
	/**
	 * The access_token of the OAuth application.
	 */
	access_token: string;
}

export interface UseAppsCheckTokenMutationProps extends UseAppsCheckTokenMutationPathParams {
	body: UseAppsCheckTokenMutationRequestBody;
}

/**
 * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
 */

export function useAppsCheckTokenMutation(props: UseAppsCheckTokenMutationProps) {
	return useMutation(() => Promise.resolve());
}
