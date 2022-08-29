/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { AllowedActions } from '../schemas/AllowedActions';
import type { EnabledRepositories } from '../schemas/EnabledRepositories';

import { fetcher as _fetcher } from './fetcher';

export interface ActionsSetGithubActionsPermissionsOrganizationPathParams {
	org: string;
}

export interface ActionsSetGithubActionsPermissionsOrganizationRequestBody {
	allowed_actions?: AllowedActions;
	enabled_repositories: EnabledRepositories;
}

export interface ActionsSetGithubActionsPermissionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetGithubActionsPermissionsOrganizationPathParams {
	body: ActionsSetGithubActionsPermissionsOrganizationRequestBody;
}

/**
 * Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
 *
 * If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 */
export async function actionsSetGithubActionsPermissionsOrganization(
	props: ActionsSetGithubActionsPermissionsOrganizationProps,
) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, ActionsSetGithubActionsPermissionsOrganizationRequestBody>({
		path: `/orgs/${org}/actions/permissions`,
		method: 'PUT',
		...rest,
	});
}
