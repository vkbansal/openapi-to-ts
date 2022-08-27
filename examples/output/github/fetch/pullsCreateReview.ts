export interface PullsCreateReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsCreateReviewRequestBody {
	/**
	 * **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
	 */
	body?: string;
	/**
	 * Use the following table to specify the location, destination, and contents of the draft review comment.
	 */
	comments?: Array<{
		/**
		 * Text of the review comment.
		 */
		body: string;
		/**
		 * @example 28
		 */
		line?: number;
		/**
		 * The relative path to the file that necessitates a review comment.
		 */
		path: string;
		/**
		 * The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
		 */
		position?: number;
		/**
		 * @example "RIGHT"
		 */
		side?: string;
		/**
		 * @example 26
		 */
		start_line?: number;
		/**
		 * @example "LEFT"
		 */
		start_side?: string;
	}>;
	/**
	 * The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
	 */
	commit_id?: string;
	/**
	 * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request) when you are ready.
	 */
	event?: 'APPROVE' | 'COMMENT' | 'REQUEST_CHANGES';
}

export interface PullsCreateReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsCreateReviewPathParams {
	body: PullsCreateReviewRequestBody;
}

export async function pullsCreateReview(props: PullsCreateReviewProps) {
	const { owner, repo, pull_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/reviews`, {
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
