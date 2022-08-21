import { Team } from '../schemas/Team';
import { SimpleUser } from '../schemas/SimpleUser';
import { StatusCheckPolicy } from '../schemas/StatusCheckPolicy';
import { BranchRestrictionPolicy } from '../schemas/BranchRestrictionPolicy';
/**
 * Branch protections protect branches
 */
export interface ProtectedBranch {
	allow_deletions?: {
		enabled: boolean;
	};
	allow_force_pushes?: {
		enabled: boolean;
	};
	enforce_admins?: {
		enabled: boolean;
		/**
		 * @format uri
		 */
		url: string;
	};
	required_linear_history?: {
		enabled: boolean;
	};
	required_pull_request_reviews?: {
		dismiss_stale_reviews?: boolean;
		dismissal_restrictions?: {
			teams: Team[];
			/**
			 * @format uri
			 */
			teams_url: string;
			/**
			 * @format uri
			 */
			url: string;
			users: SimpleUser[];
			/**
			 * @format uri
			 */
			users_url: string;
		};
		require_code_owner_reviews?: boolean;
		required_approving_review_count?: number;
		/**
		 * @format uri
		 */
		url: string;
	};
	required_signatures?: {
		/**
  * @example
true
  */
		enabled: boolean;
		/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_signatures
  */
		url: string;
	};
	required_status_checks?: StatusCheckPolicy;
	restrictions?: BranchRestrictionPolicy;
	/**
	 * @format uri
	 */
	url: string;
}
