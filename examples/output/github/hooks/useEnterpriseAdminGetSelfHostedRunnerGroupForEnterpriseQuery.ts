/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseEnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseQueryPathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface UseEnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseQueryProps
	extends UseEnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseQueryPathParams {}

/**
 * Gets a specific self-hosted runner group for an enterprise.
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */

export function useEnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseQuery(
	props: UseEnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseQueryProps,
) {
	const { enterprise, runner_group_id } = props;

	return useQuery([
		'enterprise-admin/get-self-hosted-runner-group-for-enterprise',
		enterprise,
		runner_group_id,
	]);
}
