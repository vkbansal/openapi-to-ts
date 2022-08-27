export interface ReposUpdateBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposUpdateBranchProtectionRequestBody {
	/**
	 * Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation.
	 */
	allow_deletions?: boolean;
	/**
	 * Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation."
	 */
	allow_force_pushes?: boolean | null;
	/**
	 * Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
	 */
	enforce_admins: boolean | null;
	/**
	 * Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see "[Requiring a linear commit history](https://help.github.com/github/administering-a-repository/requiring-a-linear-commit-history)" in the GitHub Help documentation.
	 */
	required_linear_history?: boolean;
	/**
	 * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
	 */
	required_pull_request_reviews: {
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
		 * Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) review them.
		 */
		require_code_owner_reviews?: boolean;
		/**
		 * Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6.
		 */
		required_approving_review_count?: number;
	} | null;
	/**
	 * Require status checks to pass before merging. Set to `null` to disable.
	 */
	required_status_checks: {
		/**
		 * The list of status checks to require in order to merge into this branch
		 */
		contexts: string[];
		/**
		 * Require branches to be up to date before merging.
		 */
		strict: boolean;
	} | null;
	/**
	 * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
	 */
	restrictions: {
		/**
		 * The list of app `slug`s with push access
		 */
		apps?: string[];
		/**
		 * The list of team `slug`s with push access
		 */
		teams: string[];
		/**
		 * The list of user `login`s with push access
		 */
		users: string[];
	} | null;
}

export interface ReposUpdateBranchProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateBranchProtectionPathParams {
	body: ReposUpdateBranchProtectionRequestBody;
}

export async function reposUpdateBranchProtection(props: ReposUpdateBranchProtectionProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/branches/${branch}/protection`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
