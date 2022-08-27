import { useQuery } from '@tanstack/react-query';

export interface EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams {
	enterprise: string;
}

export interface EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseEnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryProps
	extends EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams {
	queryParams: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams;
}

export function useEnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQuery(
	props: UseEnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryProps,
) {
	const { enterprise, queryParams } = props;

	return useQuery([
		'enterprise-admin/list-selected-organizations-enabled-github-actions-enterprise',
		enterprise,
		queryParams,
	]);
}
