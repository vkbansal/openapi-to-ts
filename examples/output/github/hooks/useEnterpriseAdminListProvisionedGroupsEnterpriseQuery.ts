import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminListProvisionedGroupsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams {
	startIndex?: number;
	count?: number;
	filter?: string;
	excludedAttributes?: string;
}

export interface UseEnterpriseAdminListProvisionedGroupsEnterpriseQueryProps
	extends EnterpriseAdminListProvisionedGroupsEnterprisePathParams {
	queryParams: EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams;
}

export function useEnterpriseAdminListProvisionedGroupsEnterpriseQuery(
	props: UseEnterpriseAdminListProvisionedGroupsEnterpriseQueryProps,
) {
	const { enterprise, queryParams } = props;

	return useQuery(['enterprise-admin/list-provisioned-groups-enterprise', enterprise, queryParams]);
}
