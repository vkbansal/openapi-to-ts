/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseEnterpriseAdminProvisionAndInviteEnterpriseGroupMutationPathParams {
	enterprise: string;
}

export interface UseEnterpriseAdminProvisionAndInviteEnterpriseGroupMutationRequestBody {
	/**
	 * The name of the SCIM group. This must match the GitHub organization that the group maps to.
	 */
	displayName: string;
	members?: Array<{
		/**
		 * The SCIM user ID for a user.
		 */
		value: string;
	}>;
	/**
	 * The SCIM schema URIs.
	 */
	schemas: string[];
}

export interface UseEnterpriseAdminProvisionAndInviteEnterpriseGroupMutationProps
	extends UseEnterpriseAdminProvisionAndInviteEnterpriseGroupMutationPathParams {
	body: UseEnterpriseAdminProvisionAndInviteEnterpriseGroupMutationRequestBody;
}

/**
 * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 *
 * Provision an enterprise group, and invite users to the group. This sends invitation emails to the email address of the invited users to join the GitHub organization that the SCIM group corresponds to.
 */

export function useEnterpriseAdminProvisionAndInviteEnterpriseGroupMutation(
	props: UseEnterpriseAdminProvisionAndInviteEnterpriseGroupMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
