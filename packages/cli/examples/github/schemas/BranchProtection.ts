import { ProtectedBranchAdminEnforced } from '../schemas/ProtectedBranchAdminEnforced';
import { ProtectedBranchPullRequestReview } from '../schemas/ProtectedBranchPullRequestReview';
import { BranchRestrictionPolicy } from '../schemas/BranchRestrictionPolicy';
/**
 * Branch Protection
 */
export interface BranchProtection {
	allow_deletions?: {
		enabled?: boolean;
	};
	allow_force_pushes?: {
		enabled?: boolean;
	};
	enabled: boolean;
	enforce_admins?: ProtectedBranchAdminEnforced;
	/**
  * @example
"branch/with/protection"
  */
	name?: string;
	/**
  * @example
"https://api.github.com/repos/owner-79e94e2d36b3fd06a32bb213/AAA_Public_Repo/branches/branch/with/protection/protection"
  */
	protection_url?: string;
	required_linear_history?: {
		enabled?: boolean;
	};
	required_pull_request_reviews?: ProtectedBranchPullRequestReview;
	required_status_checks: {
		contexts: string[];
		contexts_url?: string;
		enforcement_level: string;
		url?: string;
	};
	restrictions?: BranchRestrictionPolicy;
	url?: string;
}
