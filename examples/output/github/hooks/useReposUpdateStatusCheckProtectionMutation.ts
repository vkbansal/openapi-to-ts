/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposUpdateStatusCheckProtectionMutationPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposUpdateStatusCheckProtectionMutationRequestBody {
	/**
	 * The list of status checks to require in order to merge into this branch
	 */
	contexts?: string[];
	/**
	 * Require branches to be up to date before merging.
	 */
	strict?: boolean;
}

export interface UseReposUpdateStatusCheckProtectionMutationProps
	extends UseReposUpdateStatusCheckProtectionMutationPathParams {
	body: UseReposUpdateStatusCheckProtectionMutationRequestBody;
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
 */

export function useReposUpdateStatusCheckProtectionMutation(
	props: UseReposUpdateStatusCheckProtectionMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
