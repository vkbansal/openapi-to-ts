/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface OrgsGetPathParams {
	org: string;
}

export interface OrgsGetProps extends Omit<RequestInit, 'method' | 'body'>, OrgsGetPathParams {}

/**
 * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
 *
 * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See "[Authenticating with GitHub Apps](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub plan information' below."
 */
export async function orgsGet(props: OrgsGetProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}`,
		method: 'GET',
		...rest,
	});
}
