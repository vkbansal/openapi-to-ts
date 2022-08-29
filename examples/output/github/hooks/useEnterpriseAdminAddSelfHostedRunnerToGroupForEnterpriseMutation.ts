/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseEnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseMutationPathParams {
	enterprise: string;
	runner_group_id: number;
	runner_id: number;
}

export interface UseEnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseMutationProps
	extends UseEnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseMutationPathParams {}

/**
 * Adds a self-hosted runner to a runner group configured in an enterprise.
 *
 * You must authenticate using an access token with the `admin:enterprise`
 * scope to use this endpoint.
 */

export function useEnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseMutation(
	props: UseEnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
