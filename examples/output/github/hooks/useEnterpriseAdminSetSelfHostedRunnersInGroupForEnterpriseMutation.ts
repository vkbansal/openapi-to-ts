/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseEnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseMutationPathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface UseEnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseMutationRequestBody {
	/**
	 * List of runner IDs to add to the runner group.
	 */
	runners: number[];
}

export interface UseEnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseMutationProps
	extends UseEnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseMutationPathParams {
	body: UseEnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseMutationRequestBody;
}

/**
 * Replaces the list of self-hosted runners that are part of an enterprise runner group.
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */

export function useEnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseMutation(
	props: UseEnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
