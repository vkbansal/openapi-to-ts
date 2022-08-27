import { useQuery } from '@tanstack/react-query';

export interface AppsGetRepoInstallationPathParams {
	owner: string;
	repo: string;
}

export interface UseAppsGetRepoInstallationQueryProps extends AppsGetRepoInstallationPathParams {}

export function useAppsGetRepoInstallationQuery(props: UseAppsGetRepoInstallationQueryProps) {
	const { owner, repo } = props;

	return useQuery(['apps/get-repo-installation', owner, repo]);
}
