/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { Link } from '../schemas/Link';
import type { AuthorAssociation } from '../schemas/AuthorAssociation';
import type { SimpleUser } from '../schemas/SimpleUser';

/**
 * Legacy Review Comment
 */
export interface ReviewComment {
	_links: {
		html: Link;
		pull_request: Link;
		self: Link;
	};
	author_association: AuthorAssociation;
	/**
	 * @example "Great stuff"
	 */
	body: string;
	body_html?: string;
	body_text?: string;
	/**
	 * @example "6dcb09b5b57875f334f61aebed695e2e4193db5e"
	 */
	commit_id: string;
	/**
	 * @format date-time
	 * @example "2011-04-14T16:00:49Z"
	 */
	created_at: string;
	/**
	 * @example "@@ -16,33 +16,40 @@ public class Connection : IConnection..."
	 */
	diff_hunk: string;
	/**
	 * @format uri
	 * @example "https://github.com/octocat/Hello-World/pull/1#discussion-diff-1"
	 */
	html_url: string;
	/**
	 * @example 10
	 */
	id: number;
	/**
	 * @example 8
	 */
	in_reply_to_id?: number;
	/**
	 * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
	 * @example 2
	 */
	line?: number;
	/**
	 * @example "MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw"
	 */
	node_id: string;
	/**
	 * @example "9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840"
	 */
	original_commit_id: string;
	/**
	 * The original line of the blob to which the comment applies. The last line of the range for a multi-line comment
	 * @example 2
	 */
	original_line?: number;
	/**
	 * @example 4
	 */
	original_position: number;
	/**
	 * The original first line of the range for a multi-line comment.
	 * @example 2
	 */
	original_start_line?: number | null;
	/**
	 * @example "file1.txt"
	 */
	path: string;
	/**
	 * @example 1
	 */
	position: number | null;
	/**
	 * @example 42
	 */
	pull_request_review_id: number | null;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/pulls/1"
	 */
	pull_request_url: string;
	/**
	 * The side of the first line of the range for a multi-line comment.
	 * @default "RIGHT"
	 */
	side?: 'LEFT' | 'RIGHT';
	/**
	 * The first line of the range for a multi-line comment.
	 * @example 2
	 */
	start_line?: number | null;
	/**
	 * The side of the first line of the range for a multi-line comment.
	 * @default "RIGHT"
	 */
	start_side?: 'LEFT' | 'RIGHT' | null;
	/**
	 * @format date-time
	 * @example "2011-04-14T16:00:49Z"
	 */
	updated_at: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/Hello-World/pulls/comments/1"
	 */
	url: string;
	user: SimpleUser | null;
}
