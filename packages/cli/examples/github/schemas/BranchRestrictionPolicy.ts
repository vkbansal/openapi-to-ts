/**
 * Branch Restriction Policy
 */
export interface BranchRestrictionPolicy {
	apps: Array<{
		created_at?: string;
		description?: string;
		events?: string[];
		external_url?: string;
		html_url?: string;
		id?: number;
		name?: string;
		node_id?: string;
		owner?: {
			avatar_url?: string;
			description?: string;
			events_url?: string;
			/**
  * @example
"https://api.github.com/users/testorg-ea8ec76d71c3af4b/followers"
  */
			followers_url?: string;
			/**
  * @example
"https://api.github.com/users/testorg-ea8ec76d71c3af4b/following{/other_user}"
  */
			following_url?: string;
			/**
  * @example
"https://api.github.com/users/testorg-ea8ec76d71c3af4b/gists{/gist_id}"
  */
			gists_url?: string;
			/**
  * @example
""
  */
			gravatar_id?: string;
			hooks_url?: string;
			/**
  * @example
"https://github.com/testorg-ea8ec76d71c3af4b"
  */
			html_url?: string;
			id?: number;
			issues_url?: string;
			login?: string;
			members_url?: string;
			node_id?: string;
			/**
  * @example
"https://api.github.com/users/testorg-ea8ec76d71c3af4b/orgs"
  */
			organizations_url?: string;
			public_members_url?: string;
			/**
  * @example
"https://api.github.com/users/testorg-ea8ec76d71c3af4b/received_events"
  */
			received_events_url?: string;
			repos_url?: string;
			/**
  * @example
"https://api.github.com/users/testorg-ea8ec76d71c3af4b/starred{/owner}{/repo}"
  */
			starred_url?: string;
			/**
  * @example
"https://api.github.com/users/testorg-ea8ec76d71c3af4b/subscriptions"
  */
			subscriptions_url?: string;
			/**
  * @example
"Organization"
  */
			type?: string;
			url?: string;
		};
		permissions?: {
			contents?: string;
			issues?: string;
			metadata?: string;
			single_file?: string;
		};
		slug?: string;
		updated_at?: string;
	}>;
	/**
	 * @format uri
	 */
	apps_url: string;
	teams: Array<{
		description?: string | null;
		html_url?: string;
		id?: number;
		members_url?: string;
		name?: string;
		node_id?: string;
		parent?: string | null;
		permission?: string;
		privacy?: string;
		repositories_url?: string;
		slug?: string;
		url?: string;
	}>;
	/**
	 * @format uri
	 */
	teams_url: string;
	/**
	 * @format uri
	 */
	url: string;
	users: Array<{
		avatar_url?: string;
		events_url?: string;
		followers_url?: string;
		following_url?: string;
		gists_url?: string;
		gravatar_id?: string;
		html_url?: string;
		id?: number;
		login?: string;
		node_id?: string;
		organizations_url?: string;
		received_events_url?: string;
		repos_url?: string;
		site_admin?: boolean;
		starred_url?: string;
		subscriptions_url?: string;
		type?: string;
		url?: string;
	}>;
	/**
	 * @format uri
	 */
	users_url: string;
}
