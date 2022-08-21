import { SimpleUser } from '../schemas/SimpleUser';
import { SimpleUser } from '../schemas/SimpleUser';
import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { Milestone } from '../schemas/Milestone';
import { Integration } from '../schemas/Integration';
import { Repository } from '../schemas/Repository';
import { SearchResultTextMatches } from '../schemas/SearchResultTextMatches';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Issue Search Result Item
 */
export interface IssueSearchResultItem {
	active_lock_reason?: string | null;
	assignee: SimpleUser | null;
	assignees?: SimpleUser[] | null;
	author_association: AuthorAssociation;
	body?: string;
	body_html?: string;
	body_text?: string;
	/**
	 * @format date-time
	 */
	closed_at: string | null;
	comments: number;
	/**
	 * @format uri
	 */
	comments_url: string;
	/**
	 * @format date-time
	 */
	created_at: string;
	draft?: boolean;
	/**
	 * @format uri
	 */
	events_url: string;
	/**
	 * @format uri
	 */
	html_url: string;
	id: number;
	labels: Array<{
		color?: string;
		default?: boolean;
		description?: string | null;
		id?: number;
		name?: string;
		node_id?: string;
		url?: string;
	}>;
	labels_url: string;
	locked: boolean;
	milestone: Milestone | null;
	node_id: string;
	number: number;
	performed_via_github_app?: Integration | null;
	pull_request?: {
		/**
		 * @format uri
		 */
		diff_url: string | null;
		/**
		 * @format uri
		 */
		html_url: string | null;
		/**
		 * @format date-time
		 */
		merged_at?: string | null;
		/**
		 * @format uri
		 */
		patch_url: string | null;
		/**
		 * @format uri
		 */
		url: string | null;
	};
	repository?: Repository;
	/**
	 * @format uri
	 */
	repository_url: string;
	score: number;
	state: string;
	text_matches?: SearchResultTextMatches;
	/**
	 * @format uri
	 */
	timeline_url?: string;
	title: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
	 * @format uri
	 */
	url: string;
	user: SimpleUser | null;
}
