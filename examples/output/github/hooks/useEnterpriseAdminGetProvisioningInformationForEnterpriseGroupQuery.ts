/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams {
	enterprise: string;
	scim_group_id: string;
}

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams {
	excludedAttributes?: string;
}

export interface UseEnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryProps
	extends EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams {
	queryParams: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams;
}

/**
 * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 */

export function useEnterpriseAdminGetProvisioningInformationForEnterpriseGroupQuery(
	props: UseEnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryProps,
) {
	const { enterprise, scim_group_id, queryParams } = props;

	return useQuery([
		'enterprise-admin/get-provisioning-information-for-enterprise-group',
		enterprise,
		scim_group_id,
		queryParams,
	]);
}
