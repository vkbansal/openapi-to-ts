/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationMutationPathParams {
	org: string;
}

export interface UseActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationMutationRequestBody {
	/**
	 * List of repository IDs to enable for GitHub Actions.
	 */
	selected_repository_ids: number[];
}

export interface UseActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationMutationProps
	extends UseActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationMutationPathParams {
	body: UseActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationMutationRequestBody;
}

/**
 * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 */

export function useActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationMutation(
	props: UseActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
