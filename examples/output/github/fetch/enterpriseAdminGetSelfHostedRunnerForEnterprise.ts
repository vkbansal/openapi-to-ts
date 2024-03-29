/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams {
	enterprise: string;
	runner_id: number;
}

export interface EnterpriseAdminGetSelfHostedRunnerForEnterpriseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams {}

/**
 * Gets a specific self-hosted runner configured in an enterprise.
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */
export async function enterpriseAdminGetSelfHostedRunnerForEnterprise(
	props: EnterpriseAdminGetSelfHostedRunnerForEnterpriseProps,
) {
	const { enterprise, runner_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/enterprises/${enterprise}/actions/runners/${runner_id}`,
		method: 'GET',
		...rest,
	});
}
