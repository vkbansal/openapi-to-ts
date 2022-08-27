import { useQuery } from '@tanstack/react-query';

export interface ActionsGetGithubActionsPermissionsOrganizationPathParams {
	org: string;
}

export interface UseActionsGetGithubActionsPermissionsOrganizationQueryProps
	extends ActionsGetGithubActionsPermissionsOrganizationPathParams {}

export function useActionsGetGithubActionsPermissionsOrganizationQuery(
	props: UseActionsGetGithubActionsPermissionsOrganizationQueryProps,
) {
	const { org } = props;

	return useQuery(['actions/get-github-actions-permissions-organization', org]);
}
