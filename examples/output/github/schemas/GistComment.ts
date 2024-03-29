/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { AuthorAssociation } from '../schemas/AuthorAssociation';
import type { SimpleUser } from '../schemas/SimpleUser';

/**
 * A comment made to a gist.
 */
export interface GistComment {
	author_association: AuthorAssociation;
	/**
	 * The comment text.
	 * @example "Body of the attachment"
	 */
	body: string;
	/**
	 * @format date-time
	 * @example "2011-04-18T23:23:56Z"
	 */
	created_at: string;
	/**
	 * @example 1
	 */
	id: number;
	/**
	 * @example "MDExOkdpc3RDb21tZW50MQ=="
	 */
	node_id: string;
	/**
	 * @format date-time
	 * @example "2011-04-18T23:23:56Z"
	 */
	updated_at: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/gists/a6db0bec360bb87e9418/comments/1"
	 */
	url: string;
	user: SimpleUser | null;
}
