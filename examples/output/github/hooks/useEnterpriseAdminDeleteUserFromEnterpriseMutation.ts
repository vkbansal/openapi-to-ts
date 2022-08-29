/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseEnterpriseAdminDeleteUserFromEnterpriseMutationPathParams {
	enterprise: string;
	scim_user_id: string;
}

export interface UseEnterpriseAdminDeleteUserFromEnterpriseMutationProps
	extends UseEnterpriseAdminDeleteUserFromEnterpriseMutationPathParams {}

/**
 * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 */

export function useEnterpriseAdminDeleteUserFromEnterpriseMutation(
	props: UseEnterpriseAdminDeleteUserFromEnterpriseMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
