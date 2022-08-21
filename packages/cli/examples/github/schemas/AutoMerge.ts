import { SimpleUser } from '../schemas/SimpleUser';
/**
 * The status of auto merging a pull request.
 */
export type AutoMerge = {
	/**
	 * Commit message for the merge commit.
	 */
	commit_message: string;
	/**
	 * Title for the merge commit message.
	 */
	commit_title: string;
	enabled_by: SimpleUser;
	/**
	 * The merge method to use.
	 */
	merge_method: 'merge' | 'rebase' | 'squash';
} | null;
