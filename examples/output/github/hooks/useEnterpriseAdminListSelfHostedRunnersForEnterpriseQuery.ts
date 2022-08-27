import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseEnterpriseAdminListSelfHostedRunnersForEnterpriseQueryProps
	extends EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams {
	queryParams: EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams;
}

export function useEnterpriseAdminListSelfHostedRunnersForEnterpriseQuery(
	props: UseEnterpriseAdminListSelfHostedRunnersForEnterpriseQueryProps,
) {
	const { enterprise, queryParams } = props;

	return useQuery([
		'enterprise-admin/list-self-hosted-runners-for-enterprise',
		enterprise,
		queryParams,
	]);
}
