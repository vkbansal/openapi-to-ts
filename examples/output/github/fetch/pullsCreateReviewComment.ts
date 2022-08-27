export interface PullsCreateReviewCommentPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsCreateReviewCommentRequestBody {
	/**
	 * The text of the review comment.
	 */
	body: string;
	/**
	 * The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
	 */
	commit_id?: string;
	/**
	 * @example 2
	 */
	in_reply_to?: number;
	/**
	 * **Required with `comfort-fade` preview**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.
	 */
	line?: number;
	/**
	 * The relative path to the file that necessitates a comment.
	 */
	path?: string;
	/**
	 * **Required without `comfort-fade` preview**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note above.
	 */
	position?: number;
	/**
	 * **Required with `comfort-fade` preview**. In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see "[Diff view options](https://help.github.com/en/articles/about-comparing-branches-in-pull-requests#diff-view-options)" in the GitHub Help documentation.
	 */
	side?: 'LEFT' | 'RIGHT';
	/**
	 * **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation.
	 */
	start_line?: number;
	/**
	 * **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation. See `side` in this table for additional context.
	 */
	start_side?: 'LEFT' | 'RIGHT' | 'side';
}

export interface PullsCreateReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsCreateReviewCommentPathParams {
	body: PullsCreateReviewCommentRequestBody;
}

export async function pullsCreateReviewComment(props: PullsCreateReviewCommentProps) {
	const { owner, repo, pull_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/comments`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
