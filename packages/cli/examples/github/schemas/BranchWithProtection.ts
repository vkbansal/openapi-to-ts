import { Commit } from '../schemas/Commit';
import { BranchProtection } from '../schemas/BranchProtection';
/**
 * Branch With Protection
 */
export interface BranchWithProtection {
	_links: {
		html: string;
		/**
		 * @format uri
		 */
		self: string;
	};
	commit: Commit;
	name: string;
	/**
  * @example
"mas*"
  */
	pattern?: string;
	protected: boolean;
	protection: BranchProtection;
	/**
	 * @format uri
	 */
	protection_url: string;
	/**
  * @example
1
  */
	required_approving_review_count?: number;
}
