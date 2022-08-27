/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams {
	per_page?: number;
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