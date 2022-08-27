import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminGetAllowedActionsEnterprisePathParams {
	enterprise: string;
}

export interface UseEnterpriseAdminGetAllowedActionsEnterpriseQueryProps
	extends EnterpriseAdminGetAllowedActionsEnterprisePathParams {}

export function useEnterpriseAdminGetAllowedActionsEnterpriseQuery(
	props: UseEnterpriseAdminGetAllowedActionsEnterpriseQueryProps,
) {
	const { enterprise } = props;

	return useQuery(['enterprise-admin/get-allowed-actions-enterprise', enterprise]);
}
