/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { Integration } from '../schemas/Integration';
import { ReactionRollup } from '../schemas/ReactionRollup';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Comments provide a way for people to collaborate on an issue.
 */
export interface IssueComment {
	author_association: AuthorAssociation;
	/**
	 * Contents of the issue comment
	 * @example What version of Safari were you using when you observed this bug?
	 */
	body?: string;
	body_html?: string;
	body_text?: string;
	/**
	 * @format date-time
	 * @example Sat Aug 27 2022 08:56:52 GMT+0530 (India Standard Time)
	 */
	created_at: string;
	/**
	 * @format uri
	 */
	html_url: string;
	/**
	 * Unique identifier of the issue comment
	 * @example 42
	 */
	id: number;
	/**
	 * @format uri
	 */
	issue_url: string;
	node_id: string;
	performed_via_github_app?: Integration | null;
	reactions?: ReactionRollup;
	/**
	 * @format date-time
	 * @example Sat Aug 27 2022 08:56:52 GMT+0530 (India Standard Time)
	 */
	updated_at: string;
	/**
	 * URL for the issue comment
	 * @format uri
	 * @example https://api.github.com/repositories/42/issues/comments/1
	 */
	url: string;
	user: SimpleUser | null;
}