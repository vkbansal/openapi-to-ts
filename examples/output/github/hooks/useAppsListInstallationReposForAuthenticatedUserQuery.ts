/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseAppsListInstallationReposForAuthenticatedUserQueryPathParams {
	installation_id: number;
}

export interface UseAppsListInstallationReposForAuthenticatedUserQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListInstallationReposForAuthenticatedUserQueryProps
	extends UseAppsListInstallationReposForAuthenticatedUserQueryPathParams {
	queryParams: UseAppsListInstallationReposForAuthenticatedUserQueryQueryParams;
}

/**
 * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
 *
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
 *
 * You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
 *
 * The access the user has to each repository is included in the hash under the `permissions` key.
 */

export function useAppsListInstallationReposForAuthenticatedUserQuery(
	props: UseAppsListInstallationReposForAuthenticatedUserQueryProps,
) {
	const { installation_id, queryParams } = props;

	return useQuery([
		'apps/list-installation-repos-for-authenticated-user',
		installation_id,
		queryParams,
	]);
}
