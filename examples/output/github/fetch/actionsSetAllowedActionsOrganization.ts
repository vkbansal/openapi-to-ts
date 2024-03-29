/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { SelectedActions } from '../schemas/SelectedActions';

import { fetcher as _fetcher } from './fetcher';

export interface ActionsSetAllowedActionsOrganizationPathParams {
	org: string;
}

export type ActionsSetAllowedActionsOrganizationRequestBody = SelectedActions;

export interface ActionsSetAllowedActionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetAllowedActionsOrganizationPathParams {
	body: ActionsSetAllowedActionsOrganizationRequestBody;
}

/**
 * Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 *
 * If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.
 *
 * To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 */
export async function actionsSetAllowedActionsOrganization(
	props: ActionsSetAllowedActionsOrganizationProps,
) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, ActionsSetAllowedActionsOrganizationRequestBody>({
		path: `/orgs/${org}/actions/permissions/selected-actions`,
		method: 'PUT',
		...rest,
	});
}
