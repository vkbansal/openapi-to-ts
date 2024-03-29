/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface OrgsListBlockedUsersPathParams {
	org: string;
}

export interface OrgsListBlockedUsersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListBlockedUsersPathParams {}

/**
 * List the users blocked by an organization.
 */
export async function orgsListBlockedUsers(props: OrgsListBlockedUsersProps) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/blocks`,
		method: 'GET',
		...rest,
	});
}
