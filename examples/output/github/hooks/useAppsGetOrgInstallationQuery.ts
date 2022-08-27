import { useQuery } from '@tanstack/react-query';

export interface AppsGetOrgInstallationPathParams {
	org: string;
}

export interface UseAppsGetOrgInstallationQueryProps extends AppsGetOrgInstallationPathParams {}

export function useAppsGetOrgInstallationQuery(props: UseAppsGetOrgInstallationQueryProps) {
	const { org } = props;

	return useQuery(['apps/get-org-installation', org]);
}
