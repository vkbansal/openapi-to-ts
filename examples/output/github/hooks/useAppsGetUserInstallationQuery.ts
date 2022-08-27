import { useQuery } from '@tanstack/react-query';

export interface AppsGetUserInstallationPathParams {
	username: string;
}

export interface UseAppsGetUserInstallationQueryProps extends AppsGetUserInstallationPathParams {}

export function useAppsGetUserInstallationQuery(props: UseAppsGetUserInstallationQueryProps) {
	const { username } = props;

	return useQuery(['apps/get-user-installation', username]);
}
