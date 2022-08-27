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
