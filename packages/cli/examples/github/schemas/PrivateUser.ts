/**
 * Private User
 */
export interface PrivateUser {
	/**
  * @format uri
  * @example
https://github.com/images/error/octocat_happy.gif
  */
	avatar_url: string;
	/**
  * @example
There once was...
  */
	bio: string | null;
	/**
  * @example
https://github.com/blog
  */
	blog: string | null;
	business_plus?: boolean;
	/**
  * @example
8
  */
	collaborators: number;
	/**
  * @example
GitHub
  */
	company: string | null;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @example
10000
  */
	disk_usage: number;
	/**
  * @format email
  * @example
octocat@github.com
  */
	email: string | null;
	/**
  * @example
https://api.github.com/users/octocat/events{/privacy}
  */
	events_url: string;
	/**
  * @example
20
  */
	followers: number;
	/**
  * @format uri
  * @example
https://api.github.com/users/octocat/followers
  */
	followers_url: string;
	following: number;
	/**
  * @example
https://api.github.com/users/octocat/following{/other_user}
  */
	following_url: string;
	/**
  * @example
https://api.github.com/users/octocat/gists{/gist_id}
  */
	gists_url: string;
	/**
  * @example
41d064eb2195891e12d0413f63227ea7
  */
	gravatar_id: string | null;
	hireable: boolean | null;
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
	ldap_dn?: string;
	/**
  * @example
San Francisco
  */
	location: string | null;
	/**
  * @example
octocat
  */
	login: string;
	/**
  * @example
monalisa octocat
  */
	name: string | null;
	/**
  * @example
MDQ6VXNlcjE=
  */
	node_id: string;
	/**
  * @format uri
  * @example
https://api.github.com/users/octocat/orgs
  */
	organizations_url: string;
	/**
  * @example
100
  */
	owned_private_repos: number;
	plan?: {
		collaborators: number;
		name: string;
		private_repos: number;
		space: number;
	};
	/**
  * @example
81
  */
	private_gists: number;
	/**
  * @example
1
  */
	public_gists: number;
	/**
  * @example
2
  */
	public_repos: number;
	/**
  * @format uri
  * @example
https://api.github.com/users/octocat/received_events
  */
	received_events_url: string;
	/**
  * @format uri
  * @example
https://api.github.com/users/octocat/repos
  */
	repos_url: string;
	site_admin: boolean;
	/**
  * @example
https://api.github.com/users/octocat/starred{/owner}{/repo}
  */
	starred_url: string;
	/**
  * @format uri
  * @example
https://api.github.com/users/octocat/subscriptions
  */
	subscriptions_url: string;
	/**
	 * @format date-time
	 */
	suspended_at?: string | null;
	/**
  * @example
100
  */
	total_private_repos: number;
	/**
  * @example
monalisa
  */
	twitter_username?: string | null;
	/**
  * @example
true
  */
	two_factor_authentication: boolean;
	/**
  * @example
User
  */
	type: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/users/octocat
  */
	url: string;
}
