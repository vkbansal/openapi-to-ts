/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposRemoveStatusCheckProtectionMutationPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposRemoveStatusCheckProtectionMutationProps
	extends UseReposRemoveStatusCheckProtectionMutationPathParams {}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 */

export function useReposRemoveStatusCheckProtectionMutation(
	props: UseReposRemoveStatusCheckProtectionMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
