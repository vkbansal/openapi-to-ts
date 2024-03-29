/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseAppsGetInstallationQueryPathParams {
	installation_id: number;
}

export interface UseAppsGetInstallationQueryProps extends UseAppsGetInstallationQueryPathParams {}

/**
 * Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 */

export function useAppsGetInstallationQuery(props: UseAppsGetInstallationQueryProps) {
	const { installation_id } = props;

	return useQuery(['apps/get-installation', installation_id]);
}
