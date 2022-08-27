/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
/**
 * Collaborator
 */
export interface Collaborator {
	/**
	 * @format uri
	 * @example https://github.com/images/error/octocat_happy.gif
	 */
	avatar_url: string;
	/**
	 * @example https://api.github.com/users/octocat/events{/privacy}
	 */
	events_url: string;
	/**
	 * @format uri
	 * @example https://api.github.com/users/octocat/followers
	 */
	followers_url: string;
	/**
	 * @example https://api.github.com/users/octocat/following{/other_user}
	 */
	following_url: string;
	/**
	 * @example https://api.github.com/users/octocat/gists{/gist_id}
	 */
	gists_url: string;
	/**
	 * @example 41d064eb2195891e12d0413f63227ea7
	 */
	gravatar_id: string | null;
	/**
	 * @format uri
	 * @example https://github.com/octocat
	 */
	html_url: string;
	/**
	 * @example 1
	 */
	id: number;
	/**
	 * @example octocat
	 */
	login: string;
	/**
	 * @example MDQ6VXNlcjE=
	 */
	node_id: string;
	/**
	 * @format uri
	 * @example https://api.github.com/users/octocat/orgs
	 */
	organizations_url: string;
	permissions?: {
		admin: boolean;
		pull: boolean;
		push: boolean;
	};
	/**
	 * @format uri
	 * @example https://api.github.com/users/octocat/received_events
	 */
	received_events_url: string;
	/**
	 * @format uri
	 * @example https://api.github.com/users/octocat/repos
	 */
	repos_url: string;
	site_admin: boolean;
	/**
	 * @example https://api.github.com/users/octocat/starred{/owner}{/repo}
	 */
	starred_url: string;
	/**
	 * @format uri
	 * @example https://api.github.com/users/octocat/subscriptions
	 */
	subscriptions_url: string;
	/**
	 * @example User
	 */
	type: string;
	/**
	 * @format uri
	 * @example https://api.github.com/users/octocat
	 */
	url: string;
}
