/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseChecksGetSuiteQueryPathParams {
	owner: string;
	repo: string;
	check_suite_id: number;
}

export interface UseChecksGetSuiteQueryProps extends UseChecksGetSuiteQueryPathParams {}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 *
 * Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
 */

export function useChecksGetSuiteQuery(props: UseChecksGetSuiteQueryProps) {
	const { owner, repo, check_suite_id } = props;

	return useQuery(['checks/get-suite', owner, repo, check_suite_id]);
}
