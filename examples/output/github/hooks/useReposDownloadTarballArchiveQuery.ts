import { useQuery } from '@tanstack/react-query';

export interface ReposDownloadTarballArchivePathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface UseReposDownloadTarballArchiveQueryProps
	extends ReposDownloadTarballArchivePathParams {}

export function useReposDownloadTarballArchiveQuery(
	props: UseReposDownloadTarballArchiveQueryProps,
) {
	const { owner, repo, ref } = props;

	return useQuery(['repos/download-tarball-archive', owner, repo, ref]);
}
