/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposUpdatePullRequestReviewProtectionMutationPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposUpdatePullRequestReviewProtectionMutationRequestBody {
	/**
	 * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
	 */
	dismiss_stale_reviews?: boolean;
	/**
	 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
	 */
	dismissal_restrictions?: {
		/**
		 * The list of team `slug`s with dismissal access
		 */
		teams?: string[];
		/**
		 * The list of user `login`s with dismissal access
		 */
		users?: string[];
	};
	/**
	 * Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) have reviewed.
	 */
	require_code_owner_reviews?: boolean;
	/**
	 * Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6.
	 */
	required_approving_review_count?: number;
}

export interface UseReposUpdatePullRequestReviewProtectionMutationProps
	extends UseReposUpdatePullRequestReviewProtectionMutationPathParams {
	body: UseReposUpdatePullRequestReviewProtectionMutationRequestBody;
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
 *
 * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
 */

export function useReposUpdatePullRequestReviewProtectionMutation(
	props: UseReposUpdatePullRequestReviewProtectionMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
