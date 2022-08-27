import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams {
	enterprise: string;
	runner_group_id: number;
}

export interface UseEnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseQueryProps
	extends EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams {}

export function useEnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseQuery(
	props: UseEnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseQueryProps,
) {
	const { enterprise, runner_group_id } = props;

	return useQuery([
		'enterprise-admin/get-self-hosted-runner-group-for-enterprise',
		enterprise,
		runner_group_id,
	]);
}
