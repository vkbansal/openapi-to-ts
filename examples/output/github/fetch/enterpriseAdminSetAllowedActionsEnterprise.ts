/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { SelectedActions } from '../schemas/SelectedActions';

export interface EnterpriseAdminSetAllowedActionsEnterprisePathParams {
	enterprise: string;
}

export type EnterpriseAdminSetAllowedActionsEnterpriseRequestBody = SelectedActions;

export interface EnterpriseAdminSetAllowedActionsEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminSetAllowedActionsEnterprisePathParams {
	body: EnterpriseAdminSetAllowedActionsEnterpriseRequestBody;
}

/**
 * Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */
export async function enterpriseAdminSetAllowedActionsEnterprise(
	props: EnterpriseAdminSetAllowedActionsEnterpriseProps,
) {
	const { enterprise, body, ...rest } = props;

	const response = await fetch(`/enterprises/${enterprise}/actions/permissions/selected-actions`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
