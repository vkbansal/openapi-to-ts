/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface OrgsListForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListForAuthenticatedUserProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: OrgsListForAuthenticatedUserQueryParams;
	paramsSerializer?: (params: OrgsListForAuthenticatedUserQueryParams) => string;
}

/**
 * List organizations for the authenticated user.
 *
 * **OAuth scope requirements**
 *
 * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
 */
export async function orgsListForAuthenticatedUser(props: OrgsListForAuthenticatedUserProps) {
	const { ...rest } = props;

	return _fetcher<unknown, OrgsListForAuthenticatedUserQueryParams, unknown>({
		path: `/user/orgs`,
		method: 'GET',
		...rest,
	});
}
