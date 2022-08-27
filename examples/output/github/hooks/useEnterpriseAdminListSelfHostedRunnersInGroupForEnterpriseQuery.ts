import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseEnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryProps
	extends EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams {
	queryParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams;
}

export function useEnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQuery(
	props: UseEnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryProps,
) {
	const { enterprise, runner_group_id, queryParams } = props;

	return useQuery([
		'enterprise-admin/list-self-hosted-runners-in-group-for-enterprise',
		enterprise,
		runner_group_id,
		queryParams,
	]);
}
