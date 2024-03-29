/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsListRunnerApplicationsForOrgPathParams {
	org: string;
}

export interface ActionsListRunnerApplicationsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListRunnerApplicationsForOrgPathParams {}

/**
 * Lists binaries for the runner application that you can download and run.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 */
export async function actionsListRunnerApplicationsForOrg(
	props: ActionsListRunnerApplicationsForOrgProps,
) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/actions/runners/downloads`,
		method: 'GET',
		...rest,
	});
}
