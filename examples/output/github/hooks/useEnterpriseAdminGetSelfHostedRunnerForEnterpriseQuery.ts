import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams {
	enterprise: string;
	runner_id: number;
}

export interface UseEnterpriseAdminGetSelfHostedRunnerForEnterpriseQueryProps
	extends EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams {}

export function useEnterpriseAdminGetSelfHostedRunnerForEnterpriseQuery(
	props: UseEnterpriseAdminGetSelfHostedRunnerForEnterpriseQueryProps,
) {
	const { enterprise, runner_id } = props;

	return useQuery([
		'enterprise-admin/get-self-hosted-runner-for-enterprise',
		enterprise,
		runner_id,
	]);
}
