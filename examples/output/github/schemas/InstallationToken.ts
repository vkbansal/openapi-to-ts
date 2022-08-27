/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { Repository } from '../schemas/Repository';
/**
 * Authentication token for a GitHub App installed on a user or org.
 */
export interface InstallationToken {
	expires_at: string;
	/**
	 * @example true
	 */
	has_multiple_single_files?: boolean;
	permissions?: {
		contents?: string;
		issues?: string;
		/**
		 * @example read
		 */
		metadata?: string;
		/**
		 * @example read
		 */
		single_file?: string;
	};
	repositories?: Repository[];
	repository_selection?: 'all' | 'selected';
	/**
	 * @example README.md
	 */
	single_file?: string;
	/**
	 * @example config.yml,.github/issue_TEMPLATE.md
	 */
	single_file_paths?: string[];
	token: string;
}