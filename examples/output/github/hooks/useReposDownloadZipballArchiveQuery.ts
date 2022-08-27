import { useQuery } from '@tanstack/react-query';

export interface ReposDownloadZipballArchivePathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface UseReposDownloadZipballArchiveQueryProps
	extends ReposDownloadZipballArchivePathParams {}

export function useReposDownloadZipballArchiveQuery(
	props: UseReposDownloadZipballArchiveQueryProps,
) {
	const { owner, repo, ref } = props;

	return useQuery(['repos/download-zipball-archive', owner, repo, ref]);
}
