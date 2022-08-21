import { SimpleUser } from '../schemas/SimpleUser';
import { SimpleUser } from '../schemas/SimpleUser';
import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { SimpleUser } from '../schemas/SimpleUser';
import { Milestone } from '../schemas/Milestone';
import { Integration } from '../schemas/Integration';
import { ReactionRollup } from '../schemas/ReactionRollup';
import { Repository } from '../schemas/Repository';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
 */
export interface Issue {
	active_lock_reason?: string | null;
	assignee: SimpleUser | null;
	assignees?: SimpleUser[] | null;
	author_association: AuthorAssociation;
	/**
  * Contents of the issue
  * @example
It looks like the new widget form is broken on Safari. When I try and create the widget, Safari crashes. This is reproducible on 10.8, but not 10.9. Maybe a browser bug?
  */
	body?: string;
	body_html?: string;
	body_text?: string;
	/**
	 * @format date-time
	 */
	closed_at: string | null;
	closed_by?: SimpleUser | null;
	comments: number;
	/**
	 * @format uri
	 */
	comments_url: string;
	/**
	 * @format date-time
	 */
	created_at: string;
	/**
	 * @format uri
	 */
	events_url: string;
	/**
	 * @format uri
	 */
	html_url: string;
	id: number;
	/**
  * Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
  * @example
bug,registration
  */
	labels: Array<
		string & {
			color?: string | null;
			default?: boolean;
			description?: string | null;
			id?: number;
			name?: string;
			node_id?: string;
			/**
			 * @format uri
			 */
			url?: string;
		}
	>;
	labels_url: string;
	locked: boolean;
	milestone: Milestone | null;
	node_id: string;
	/**
  * Number uniquely identifying the issue within its repository
  * @example
42
  */
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
	reactions?: ReactionRollup;
	repository?: Repository;
	/**
	 * @format uri
	 */
	repository_url: string;
	/**
  * State of the issue; either 'open' or 'closed'
  * @example
open
  */
	state: string;
	/**
	 * @format uri
	 */
	timeline_url?: string;
	/**
  * Title of the issue
  * @example
Widget creation fails in Safari on OS X 10.8
  */
	title: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
  * URL for the issue
  * @format uri
  * @example
https://api.github.com/repositories/42/issues/1
  */
	url: string;
	user: SimpleUser | null;
}
