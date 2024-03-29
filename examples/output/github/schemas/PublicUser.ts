/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

/**
 * Public User
 */
export interface PublicUser {
	/**
	 * @format uri
	 */
	avatar_url: string;
	bio: string | null;
	blog: string | null;
	/**
	 * @example 3
	 */
	collaborators?: number;
	company: string | null;
	/**
	 * @format date-time
	 */
	created_at: string;
	/**
	 * @example 1
	 */
	disk_usage?: number;
	/**
	 * @format email
	 */
	email: string | null;
	events_url: string;
	followers: number;
	/**
	 * @format uri
	 */
	followers_url: string;
	following: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string | null;
	hireable: boolean | null;
	/**
	 * @format uri
	 */
	html_url: string;
	id: number;
	location: string | null;
	login: string;
	name: string | null;
	node_id: string;
	/**
	 * @format uri
	 */
	organizations_url: string;
	/**
	 * @example 2
	 */
	owned_private_repos?: number;
	plan?: {
		collaborators: number;
		name: string;
		private_repos: number;
		space: number;
	};
	/**
	 * @example 1
	 */
	private_gists?: number;
	public_gists: number;
	public_repos: number;
	/**
	 * @format uri
	 */
	received_events_url: string;
	/**
	 * @format uri
	 */
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	/**
	 * @format uri
	 */
	subscriptions_url: string;
	/**
	 * @format date-time
	 */
	suspended_at?: string | null;
	/**
	 * @example 2
	 */
	total_private_repos?: number;
	twitter_username?: string | null;
	type: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
	 * @format uri
	 */
	url: string;
}
