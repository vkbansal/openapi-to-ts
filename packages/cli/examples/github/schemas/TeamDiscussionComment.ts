import { SimpleUser } from '../schemas/SimpleUser';
import { ReactionRollup } from '../schemas/ReactionRollup';
/**
 * A reply to a discussion within a team.
 */
export interface TeamDiscussionComment {
	author: SimpleUser | null;
	/**
  * The main text of the comment.
  * @example
I agree with this suggestion.
  */
	body: string;
	/**
  * @example
<p>Do you like apples?</p>
  */
	body_html: string;
	/**
  * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
  * @example
0307116bbf7ced493b8d8a346c650b71
  */
	body_version: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/organizations/1/team/2403582/discussions/1
  */
	discussion_url: string;
	/**
  * @format uri
  * @example
https://github.com/orgs/github/teams/justice-league/discussions/1/comments/1
  */
	html_url: string;
	/**
	 * @format date-time
	 */
	last_edited_at: string | null;
	/**
  * @example
MDIxOlRlYW1EaXNjdXNzaW9uQ29tbWVudDE=
  */
	node_id: string;
	/**
  * The unique sequence number of a team discussion comment.
  * @example
42
  */
	number: number;
	reactions?: ReactionRollup;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/organizations/1/team/2403582/discussions/1/comments/1
  */
	url: string;
}
