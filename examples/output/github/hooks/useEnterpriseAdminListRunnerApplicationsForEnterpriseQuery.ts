import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminListRunnerApplicationsForEnterprisePathParams {
	enterprise: string;
}

export interface UseEnterpriseAdminListRunnerApplicationsForEnterpriseQueryProps
	extends EnterpriseAdminListRunnerApplicationsForEnterprisePathParams {}

export function useEnterpriseAdminListRunnerApplicationsForEnterpriseQuery(
	props: UseEnterpriseAdminListRunnerApplicationsForEnterpriseQueryProps,
) {
	const { enterprise } = props;

	return useQuery(['enterprise-admin/list-runner-applications-for-enterprise', enterprise]);
}
