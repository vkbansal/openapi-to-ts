/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseEnterpriseAdminGetGithubActionsPermissionsEnterpriseQueryPathParams {
	enterprise: string;
}

export interface UseEnterpriseAdminGetGithubActionsPermissionsEnterpriseQueryProps
	extends UseEnterpriseAdminGetGithubActionsPermissionsEnterpriseQueryPathParams {}

/**
 * Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
 *
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 */

export function useEnterpriseAdminGetGithubActionsPermissionsEnterpriseQuery(
	props: UseEnterpriseAdminGetGithubActionsPermissionsEnterpriseQueryProps,
) {
	const { enterprise } = props;

	return useQuery(['enterprise-admin/get-github-actions-permissions-enterprise', enterprise]);
}
