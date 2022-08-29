/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface OrgsSetPublicMembershipForAuthenticatedUserPathParams {
	org: string;
	username: string;
}

export interface OrgsSetPublicMembershipForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsSetPublicMembershipForAuthenticatedUserPathParams {}

/**
 * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
 *
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 */
export async function orgsSetPublicMembershipForAuthenticatedUser(
	props: OrgsSetPublicMembershipForAuthenticatedUserProps,
) {
	const { org, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/public_members/${username}`,
		method: 'PUT',
		...rest,
	});
}
