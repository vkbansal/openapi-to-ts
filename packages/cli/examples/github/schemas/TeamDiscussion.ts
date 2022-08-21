import { SimpleUser } from '../schemas/SimpleUser';
import { ReactionRollup } from '../schemas/ReactionRollup';
/**
 * A team discussion is a persistent record of a free-form conversation within a team.
 */
export interface TeamDiscussion {
	author: SimpleUser | null;
	/**
  * The main text of the discussion.
  * @example
Please suggest improvements to our workflow in comments.
  */
	body: string;
	/**
  * @example
<p>Hi! This is an area for us to collaborate as a team</p>
  */
	body_html: string;
	/**
  * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
  * @example
0307116bbf7ced493b8d8a346c650b71
  */
	body_version: string;
	comments_count: number;
	/**
  * @format uri
  * @example
https://api.github.com/organizations/1/team/2343027/discussions/1/comments
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
https://github.com/orgs/github/teams/justice-league/discussions/1
  */
	html_url: string;
	/**
	 * @format date-time
	 */
	last_edited_at: string | null;
	/**
  * @example
MDE0OlRlYW1EaXNjdXNzaW9uMQ==
  */
	node_id: string;
	/**
  * The unique sequence number of a team discussion.
  * @example
42
  */
	number: number;
	/**
  * Whether or not this discussion should be pinned for easy retrieval.
  * @example
true
  */
	pinned: boolean;
	/**
  * Whether or not this discussion should be restricted to team members and organization administrators.
  * @example
true
  */
	private: boolean;
	reactions?: ReactionRollup;
	/**
  * @format uri
  * @example
https://api.github.com/organizations/1/team/2343027
  */
	team_url: string;
	/**
  * The title of the discussion.
  * @example
How can we improve our workflow?
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
https://api.github.com/organizations/1/team/2343027/discussions/1
  */
	url: string;
}
