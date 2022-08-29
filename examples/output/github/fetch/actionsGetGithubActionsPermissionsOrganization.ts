/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsGetGithubActionsPermissionsOrganizationPathParams {
	org: string;
}

export interface ActionsGetGithubActionsPermissionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetGithubActionsPermissionsOrganizationPathParams {}

/**
 * Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 */
export async function actionsGetGithubActionsPermissionsOrganization(
	props: ActionsGetGithubActionsPermissionsOrganizationProps,
) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/actions/permissions`,
		method: 'GET',
		...rest,
	});
}
