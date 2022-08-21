/**
 * Organization Simple
 */
export interface OrganizationSimple {
	/**
  * @example
https://github.com/images/error/octocat_happy.gif
  */
	avatar_url: string;
	/**
  * @example
A great organization
  */
	description: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/github/events
  */
	events_url: string;
	/**
  * @example
https://api.github.com/orgs/github/hooks
  */
	hooks_url: string;
	/**
  * @example
1
  */
	id: number;
	/**
  * @example
https://api.github.com/orgs/github/issues
  */
	issues_url: string;
	/**
  * @example
github
  */
	login: string;
	/**
  * @example
https://api.github.com/orgs/github/members{/member}
  */
	members_url: string;
	/**
  * @example
MDEyOk9yZ2FuaXphdGlvbjE=
  */
	node_id: string;
	/**
  * @example
https://api.github.com/orgs/github/public_members{/member}
  */
	public_members_url: string;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/github/repos
  */
	repos_url: string;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/github
  */
	url: string;
}
