import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseEnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryProps
	extends EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams {
	queryParams: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams;
}

export function useEnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQuery(
	props: UseEnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryProps,
) {
	const { enterprise, runner_group_id, queryParams } = props;

	return useQuery([
		'enterprise-admin/list-org-access-to-self-hosted-runner-group-in-enterprise',
		enterprise,
		runner_group_id,
		queryParams,
	]);
}
