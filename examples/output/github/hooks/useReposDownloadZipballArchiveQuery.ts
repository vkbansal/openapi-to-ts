/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposDownloadZipballArchiveQueryPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface UseReposDownloadZipballArchiveQueryProps
	extends UseReposDownloadZipballArchiveQueryPathParams {}

/**
 * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
 * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
 * the `Location` header to make a second `GET` request.
 * **Note**: For private repositories, these links are temporary and expire after five minutes.
 */

export function useReposDownloadZipballArchiveQuery(
	props: UseReposDownloadZipballArchiveQueryProps,
) {
	const { owner, repo, ref } = props;

	return useQuery(['repos/download-zipball-archive', owner, repo, ref]);
}
