import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams {
	enterprise: string;
}

export interface UseEnterpriseAdminGetGithubActionsPermissionsEnterpriseQueryProps
	extends EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams {}

export function useEnterpriseAdminGetGithubActionsPermissionsEnterpriseQuery(
	props: UseEnterpriseAdminGetGithubActionsPermissionsEnterpriseQueryProps,
) {
	const { enterprise } = props;

	return useQuery(['enterprise-admin/get-github-actions-permissions-enterprise', enterprise]);
}
