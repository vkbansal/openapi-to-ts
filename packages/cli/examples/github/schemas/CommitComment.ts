import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { ReactionRollup } from '../schemas/ReactionRollup';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Commit Comment
 */
export interface CommitComment {
	author_association: AuthorAssociation;
	body: string;
	commit_id: string;
	/**
	 * @format date-time
	 */
	created_at: string;
	/**
	 * @format uri
	 */
	html_url: string;
	id: number;
	line: number | null;
	node_id: string;
	path: string | null;
	position: number | null;
	reactions?: ReactionRollup;
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
