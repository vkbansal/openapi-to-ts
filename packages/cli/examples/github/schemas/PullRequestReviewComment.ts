import { AuthorAssociation } from '../schemas/AuthorAssociation';
import { ReactionRollup } from '../schemas/ReactionRollup';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
 */
export interface PullRequestReviewComment {
	_links: {
		html: {
			/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/pull/1#discussion-diff-1
  */
			href: string;
		};
		pull_request: {
			/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/pulls/1
  */
			href: string;
		};
		self: {
			/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/pulls/comments/1
  */
			href: string;
		};
	};
	author_association: AuthorAssociation;
	/**
  * The text of the comment.
  * @example
We should probably include a check for null values here.
  */
	body: string;
	/**
  * @example
"<p>comment body</p>"
  */
	body_html?: string;
	/**
  * @example
"comment body"
  */
	body_text?: string;
	/**
  * The SHA of the commit to which the comment applies.
  * @example
6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
	commit_id: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * The diff of the line that the comment refers to.
  * @example
@@ -16,33 +16,40 @@ public class Connection : IConnection...
  */
	diff_hunk: string;
	/**
  * HTML URL for the pull request review comment.
  * @format uri
  * @example
https://github.com/octocat/Hello-World/pull/1#discussion-diff-1
  */
	html_url: string;
	/**
  * The ID of the pull request review comment.
  * @example
1
  */
	id: number;
	/**
  * The comment ID to reply to.
  * @example
8
  */
	in_reply_to_id?: number;
	/**
  * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
  * @example
2
  */
	line?: number;
	/**
  * The node ID of the pull request review comment.
  * @example
MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw
  */
	node_id: string;
	/**
  * The SHA of the original commit to which the comment applies.
  * @example
9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840
  */
	original_commit_id: string;
	/**
  * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
  * @example
2
  */
	original_line?: number;
	/**
  * The index of the original line in the diff to which the comment applies.
  * @example
4
  */
	original_position: number;
	/**
  * The first line of the range for a multi-line comment.
  * @example
2
  */
	original_start_line?: number | null;
	/**
  * The relative path of the file to which the comment applies.
  * @example
config/database.yaml
  */
	path: string;
	/**
  * The line index in the diff to which the comment applies.
  * @example
1
  */
	position: number;
	/**
  * The ID of the pull request review to which the comment belongs.
  * @example
42
  */
	pull_request_review_id: number | null;
	/**
  * URL for the pull request that the review comment belongs to.
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/pulls/1
  */
	pull_request_url: string;
	reactions?: ReactionRollup;
	/**
	 * The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment
	 * @default RIGHT
	 */
	side?: 'LEFT' | 'RIGHT';
	/**
  * The first line of the range for a multi-line comment.
  * @example
2
  */
	start_line?: number | null;
	/**
	 * The side of the first line of the range for a multi-line comment.
	 * @default RIGHT
	 */
	start_side?: 'LEFT' | 'RIGHT' | null;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * URL for the pull request review comment
  * @example
https://api.github.com/repos/octocat/Hello-World/pulls/comments/1
  */
	url: string;
	user: SimpleUser;
}
