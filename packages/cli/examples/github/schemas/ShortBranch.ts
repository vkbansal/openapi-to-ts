import { BranchProtection } from '../schemas/BranchProtection';
/**
 * Short Branch
 */
export interface ShortBranch {
	commit: {
		sha: string;
		/**
		 * @format uri
		 */
		url: string;
	};
	name: string;
	protected: boolean;
	protection?: BranchProtection;
	/**
	 * @format uri
	 */
	protection_url?: string;
}
