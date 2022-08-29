/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams {
	enterprise: string;
	scim_user_id: string;
}

export interface UseEnterpriseAdminGetProvisioningInformationForEnterpriseUserQueryProps
	extends EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams {}

/**
 * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 */

export function useEnterpriseAdminGetProvisioningInformationForEnterpriseUserQuery(
	props: UseEnterpriseAdminGetProvisioningInformationForEnterpriseUserQueryProps,
) {
	const { enterprise, scim_user_id } = props;

	return useQuery([
		'enterprise-admin/get-provisioning-information-for-enterprise-user',
		enterprise,
		scim_user_id,
	]);
}
