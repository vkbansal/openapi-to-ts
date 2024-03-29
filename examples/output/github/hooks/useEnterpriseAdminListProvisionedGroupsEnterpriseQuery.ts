/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseEnterpriseAdminListProvisionedGroupsEnterpriseQueryPathParams {
	enterprise: string;
}

export interface UseEnterpriseAdminListProvisionedGroupsEnterpriseQueryQueryParams {
	startIndex?: number;
	count?: number;
	filter?: string;
	excludedAttributes?: string;
}

export interface UseEnterpriseAdminListProvisionedGroupsEnterpriseQueryProps
	extends UseEnterpriseAdminListProvisionedGroupsEnterpriseQueryPathParams {
	queryParams: UseEnterpriseAdminListProvisionedGroupsEnterpriseQueryQueryParams;
}

/**
 * **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 */

export function useEnterpriseAdminListProvisionedGroupsEnterpriseQuery(
	props: UseEnterpriseAdminListProvisionedGroupsEnterpriseQueryProps,
) {
	const { enterprise, queryParams } = props;

	return useQuery(['enterprise-admin/list-provisioned-groups-enterprise', enterprise, queryParams]);
}
