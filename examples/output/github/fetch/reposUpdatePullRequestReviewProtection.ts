export interface ReposUpdatePullRequestReviewProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposUpdatePullRequestReviewProtectionRequestBody {
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

export interface ReposUpdatePullRequestReviewProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdatePullRequestReviewProtectionPathParams {
	body: ReposUpdatePullRequestReviewProtectionRequestBody;
}

export async function reposUpdatePullRequestReviewProtection(
	props: ReposUpdatePullRequestReviewProtectionProps,
) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/required_pull_request_reviews`,
		{
			method: 'PATCH',
			body: JSON.stringify(body),
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
