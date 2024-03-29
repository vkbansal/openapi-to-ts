/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseEnterpriseAdminGetSelfHostedRunnerForEnterpriseQueryPathParams {
	enterprise: string;
	runner_id: number;
}

export interface UseEnterpriseAdminGetSelfHostedRunnerForEnterpriseQueryProps
	extends UseEnterpriseAdminGetSelfHostedRunnerForEnterpriseQueryPathParams {}

/**
 * Gets a specific self-hosted runner configured in an enterprise.
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */

export function useEnterpriseAdminGetSelfHostedRunnerForEnterpriseQuery(
	props: UseEnterpriseAdminGetSelfHostedRunnerForEnterpriseQueryProps,
) {
	const { enterprise, runner_id } = props;

	return useQuery([
		'enterprise-admin/get-self-hosted-runner-for-enterprise',
		enterprise,
		runner_id,
	]);
}
