import { SimpleUser } from '../schemas/SimpleUser';
import { AppPermissions } from '../schemas/AppPermissions';

export interface ScopedInstallation {
	account: SimpleUser;
	/**
  * @example
true
  */
	has_multiple_single_files?: boolean;
	permissions: AppPermissions;
	/**
  * @format uri
  * @example
https://api.github.com/users/octocat/repos
  */
	repositories_url: string;
	/**
	 * Describe whether all repositories have been selected or there's a selection involved
	 */
	repository_selection: 'all' | 'selected';
	/**
  * @example
config.yaml
  */
	single_file_name: string | null;
	/**
  * @example
config.yml,.github/issue_TEMPLATE.md
  */
	single_file_paths?: string[];
}
