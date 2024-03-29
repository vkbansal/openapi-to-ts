/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetLatestReleaseQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetLatestReleaseQueryProps
	extends UseReposGetLatestReleaseQueryPathParams {}

/**
 * View the latest published full release for the repository.
 *
 * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
 */

export function useReposGetLatestReleaseQuery(props: UseReposGetLatestReleaseQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-latest-release', owner, repo]);
}
