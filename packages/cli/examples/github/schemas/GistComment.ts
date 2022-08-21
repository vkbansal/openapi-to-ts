import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * A comment made to a gist.
 */
export interface GistComment {
	author_association: AuthorAssociation;
	/**
  * The comment text.
  * @example
Body of the attachment
  */
	body: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @example
1
  */
	id: number;
	/**
  * @example
MDExOkdpc3RDb21tZW50MQ==
  */
	node_id: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/gists/a6db0bec360bb87e9418/comments/1
  */
	url: string;
	user: SimpleUser | null;
}
