/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
	runner_id: number;
}

export interface EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams {}

/**
 * Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */
export async function enterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprise(
	props: EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, runner_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}/runners/${runner_id}`,
		method: 'DELETE',
		...rest,
	});
}
