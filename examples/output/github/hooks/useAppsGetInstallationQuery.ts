/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface AppsGetInstallationPathParams {
	installation_id: number;
}

export interface UseAppsGetInstallationQueryProps extends AppsGetInstallationPathParams {}

export function useAppsGetInstallationQuery(props: UseAppsGetInstallationQueryProps) {
	const { installation_id } = props;

	return useQuery(['apps/get-installation', installation_id]);
}