/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseAppsGetRepoInstallationQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseAppsGetRepoInstallationQueryProps
	extends UseAppsGetRepoInstallationQueryPathParams {}

/**
 * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 */

export function useAppsGetRepoInstallationQuery(props: UseAppsGetRepoInstallationQueryProps) {
	const { owner, repo } = props;

	return useQuery(['apps/get-repo-installation', owner, repo]);
}
