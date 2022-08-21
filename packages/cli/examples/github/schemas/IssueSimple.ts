import { SimpleUser } from '../schemas/SimpleUser';
import { SimpleUser } from '../schemas/SimpleUser';
import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { Label } from '../schemas/Label';
import { Milestone } from '../schemas/Milestone';
import { Integration } from '../schemas/Integration';
import { Repository } from '../schemas/Repository';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Issue Simple
 */
export interface IssueSimple {
	/**
  * @example
too heated
  */
	active_lock_reason?: string | null;
	assignee: SimpleUser | null;
	assignees?: SimpleUser[] | null;
	author_association: AuthorAssociation;
	/**
  * @example
I'm having a problem with this.
  */
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
  * @example
https://api.github.com/repos/octocat/Hello-World/issues/1347/comments
  */
	comments_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/issues/1347/events
  */
	events_url: string;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/issues/1347
  */
	html_url: string;
	/**
  * @example
1
  */
	id: number;
	labels: Label[];
	/**
  * @example
https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}
  */
	labels_url: string;
	/**
  * @example
true
  */
	locked: boolean;
	milestone: Milestone | null;
	/**
  * @example
MDU6SXNzdWUx
  */
	node_id: string;
	/**
  * @example
1347
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
	repository?: Repository;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World
  */
	repository_url: string;
	/**
  * @example
open
  */
	state: string;
	/**
	 * @format uri
	 */
	timeline_url?: string;
	/**
  * @example
Found a bug
  */
	title: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/issues/1347
  */
	url: string;
	user: SimpleUser | null;
}
