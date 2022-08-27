import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams {
	enterprise: string;
	scim_user_id: string;
}

export interface UseEnterpriseAdminGetProvisioningInformationForEnterpriseUserQueryProps
	extends EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams {}

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
