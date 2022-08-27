import { useQuery } from '@tanstack/react-query';

export interface ScimGetProvisioningInformationForUserPathParams {
	org: string;
	scim_user_id: string;
}

export interface UseScimGetProvisioningInformationForUserQueryProps
	extends ScimGetProvisioningInformationForUserPathParams {}

export function useScimGetProvisioningInformationForUserQuery(
	props: UseScimGetProvisioningInformationForUserQueryProps,
) {
	const { org, scim_user_id } = props;

	return useQuery(['scim/get-provisioning-information-for-user', org, scim_user_id]);
}
