/**
 * Organization Full
 */
export interface OrganizationFull {
	/**
  * @example
https://github.com/images/error/octocat_happy.gif
  */
	avatar_url: string;
	/**
  * @format email
  * @example
org@example.com
  */
	billing_email?: string | null;
	/**
  * @format uri
  * @example
https://github.com/blog
  */
	blog?: string;
	/**
  * @example
8
  */
	collaborators?: number | null;
	/**
  * @example
GitHub
  */
	company?: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	default_repository_permission?: string | null;
	/**
  * @example
A great organization
  */
	description: string | null;
	/**
  * @example
10000
  */
	disk_usage?: number | null;
	/**
  * @format email
  * @example
octocat@github.com
  */
	email?: string;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/github/events
  */
	events_url: string;
	/**
  * @example
20
  */
	followers: number;
	following: number;
	/**
  * @example
true
  */
	has_organization_projects: boolean;
	/**
  * @example
true
  */
	has_repository_projects: boolean;
	/**
  * @example
https://api.github.com/orgs/github/hooks
  */
	hooks_url: string;
	/**
  * @format uri
  * @example
https://github.com/octocat
  */
	html_url: string;
	/**
  * @example
1
  */
	id: number;
	/**
  * @example
true
  */
	is_verified?: boolean;
	/**
  * @example
https://api.github.com/orgs/github/issues
  */
	issues_url: string;
	/**
  * @example
San Francisco
  */
	location?: string;
	/**
  * @example
github
  */
	login: string;
	/**
  * @example
all
  */
	members_allowed_repository_creation_type?: string;
	/**
  * @example
true
  */
	members_can_create_internal_repositories?: boolean;
	/**
  * @example
true
  */
	members_can_create_pages?: boolean;
	/**
  * @example
true
  */
	members_can_create_private_repositories?: boolean;
	/**
  * @example
true
  */
	members_can_create_public_repositories?: boolean;
	/**
  * @example
true
  */
	members_can_create_repositories?: boolean | null;
	/**
  * @example
https://api.github.com/orgs/github/members{/member}
  */
	members_url: string;
	/**
  * @example
github
  */
	name?: string;
	/**
  * @example
MDEyOk9yZ2FuaXphdGlvbjE=
  */
	node_id: string;
	/**
  * @example
100
  */
	owned_private_repos?: number;
	plan?: {
		filled_seats?: number;
		name: string;
		private_repos: number;
		seats?: number;
		space: number;
	};
	/**
  * @example
81
  */
	private_gists?: number | null;
	/**
  * @example
1
  */
	public_gists: number;
	/**
  * @example
https://api.github.com/orgs/github/public_members{/member}
  */
	public_members_url: string;
	/**
  * @example
2
  */
	public_repos: number;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/github/repos
  */
	repos_url: string;
	/**
  * @example
100
  */
	total_private_repos?: number;
	/**
  * @example
github
  */
	twitter_username?: string | null;
	/**
  * @example
true
  */
	two_factor_requirement_enabled?: boolean | null;
	/**
  * @example
Organization
  */
	type: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/github
  */
	url: string;
}
