/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseAppsListInstallationsForAuthenticatedUserQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseAppsListInstallationsForAuthenticatedUserQueryProps {
	queryParams: UseAppsListInstallationsForAuthenticatedUserQueryQueryParams;
}

/**
 * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
 *
 * You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
 *
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
 *
 * You can find the permissions for the installation under the `permissions` key.
 */

export function useAppsListInstallationsForAuthenticatedUserQuery(
	props: UseAppsListInstallationsForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['apps/list-installations-for-authenticated-user', queryParams]);
}
