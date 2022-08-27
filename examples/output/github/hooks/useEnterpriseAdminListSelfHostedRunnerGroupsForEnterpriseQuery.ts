import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseEnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryProps
	extends EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams {
	queryParams: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams;
}

export function useEnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQuery(
	props: UseEnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryProps,
) {
	const { enterprise, queryParams } = props;

	return useQuery([
		'enterprise-admin/list-self-hosted-runner-groups-for-enterprise',
		enterprise,
		queryParams,
	]);
}
