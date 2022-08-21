import { SearchResultTextMatches } from '../schemas/SearchResultTextMatches';
/**
 * User Search Result Item
 */
export interface UserSearchResultItem {
	/**
	 * @format uri
	 */
	avatar_url: string;
	bio?: string | null;
	blog?: string | null;
	company?: string | null;
	/**
	 * @format date-time
	 */
	created_at?: string;
	/**
	 * @format email
	 */
	email?: string | null;
	events_url: string;
	followers?: number;
	/**
	 * @format uri
	 */
	followers_url: string;
	following?: number;
	following_url: string;
	gists_url: string;
	gravatar_id: string | null;
	hireable?: boolean | null;
	/**
	 * @format uri
	 */
	html_url: string;
	id: number;
	location?: string | null;
	login: string;
	name?: string | null;
	node_id: string;
	/**
	 * @format uri
	 */
	organizations_url: string;
	public_gists?: number;
	public_repos?: number;
	/**
	 * @format uri
	 */
	received_events_url: string;
	/**
	 * @format uri
	 */
	repos_url: string;
	score: number;
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
	text_matches?: SearchResultTextMatches;
	type: string;
	/**
	 * @format date-time
	 */
	updated_at?: string;
	/**
	 * @format uri
	 */
	url: string;
}
