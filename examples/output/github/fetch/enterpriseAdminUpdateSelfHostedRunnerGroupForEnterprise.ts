/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody {
	/**
	 * Name of the runner group.
	 */
	name?: string;
	/**
	 * Visibility of a runner group. You can select all organizations or select individual organizations. Can be one of: `all` or `selected`
	 * @default "all"
	 */
	visibility?: 'all' | 'selected';
}

export interface EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams {
	body: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody;
}

/**
 * Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */
export async function enterpriseAdminUpdateSelfHostedRunnerGroupForEnterprise(
	props: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseProps,
) {
	const { enterprise, runner_group_id, ...rest } = props;

	return _fetcher<
		unknown,
		unknown,
		EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody
	>({
		path: `/enterprises/${enterprise}/actions/runner-groups/${runner_group_id}`,
		method: 'PATCH',
		...rest,
	});
}
