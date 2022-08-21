import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Installation
 */
export interface Installation {
	/**
  * @format uri
  * @example
https://api.github.com/installations/1/access_tokens
  */
	access_tokens_url: string;
	account: {} | null;
	/**
  * @example
1
  */
	app_id: number;
	/**
  * @example
github-actions
  */
	app_slug: string;
	/**
  * @example
"test_13f1e99741e3e004@d7e1eb0bc0a1ba12.com"
  */
	contact_email?: string | null;
	/**
	 * @format date-time
	 */
	created_at: string;
	events: string[];
	/**
  * @example
true
  */
	has_multiple_single_files?: boolean;
	/**
  * @format uri
  * @example
https://github.com/organizations/github/settings/installations/1
  */
	html_url: string;
	/**
  * The ID of the installation.
  * @example
1
  */
	id: number;
	/**
  * @example
[object Object]
  */
	permissions: {
		checks?: string;
		contents?: string;
		deployments?: string;
		/**
  * @example
"read"
  */
		issues?: string;
		metadata?: string;
		/**
  * @example
"read"
  */
		organization_administration?: string;
		pull_requests?: string;
		statuses?: string;
	};
	/**
  * @format uri
  * @example
https://api.github.com/installation/repositories
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
	/**
	 * @format date-time
	 */
	suspended_at?: string | null;
	suspended_by?: SimpleUser | null;
	/**
	 * The ID of the user or organization this token is being scoped to.
	 */
	target_id: number;
	/**
  * @example
Organization
  */
	target_type: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
}
