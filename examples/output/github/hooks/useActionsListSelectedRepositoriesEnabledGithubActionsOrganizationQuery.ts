import { useQuery } from '@tanstack/react-query';

export interface ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams {
	org: string;
}

export interface ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryProps
	extends ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams {
	queryParams: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams;
}

export function useActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQuery(
	props: UseActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryProps,
) {
	const { org, queryParams } = props;

	return useQuery([
		'actions/list-selected-repositories-enabled-github-actions-organization',
		org,
		queryParams,
	]);
}
