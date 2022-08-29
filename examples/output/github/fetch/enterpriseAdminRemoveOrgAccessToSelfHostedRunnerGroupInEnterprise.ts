/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
	org_id: number;
}

export interface EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {}

/**
 * Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */
export async function enterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprise(
	props: EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseProps,
) {
	const { enterprise, runner_group_id, org_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/organizations/${org_id}`,
		method: 'DELETE',
		...rest,
	});
}
