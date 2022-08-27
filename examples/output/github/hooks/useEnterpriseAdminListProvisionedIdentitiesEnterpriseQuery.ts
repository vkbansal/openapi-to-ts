import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams {
	startIndex?: number;
	count?: number;
	filter?: string;
}

export interface UseEnterpriseAdminListProvisionedIdentitiesEnterpriseQueryProps
	extends EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams {
	queryParams: EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams;
}

export function useEnterpriseAdminListProvisionedIdentitiesEnterpriseQuery(
	props: UseEnterpriseAdminListProvisionedIdentitiesEnterpriseQueryProps,
) {
	const { enterprise, queryParams } = props;

	return useQuery([
		'enterprise-admin/list-provisioned-identities-enterprise',
		enterprise,
		queryParams,
	]);
}
