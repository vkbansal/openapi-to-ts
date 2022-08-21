import { Team } from '../schemas/Team';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Protected Branch Pull Request Review
 */
export interface ProtectedBranchPullRequestReview {
	/**
  * @example
true
  */
	dismiss_stale_reviews: boolean;
	dismissal_restrictions?: {
		/**
		 * The list of teams with review dismissal access.
		 */
		teams?: Team[];
		/**
  * @example
"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions/teams"
  */
		teams_url?: string;
		/**
  * @example
"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions"
  */
		url?: string;
		/**
		 * The list of users with review dismissal access.
		 */
		users?: SimpleUser[];
		/**
  * @example
"https://api.github.com/repos/the-org/an-org-repo/branches/master/protection/dismissal_restrictions/users"
  */
		users_url?: string;
	};
	/**
  * @example
true
  */
	require_code_owner_reviews: boolean;
	/**
  * @example
2
  */
	required_approving_review_count?: number;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions
  */
	url?: string;
}
