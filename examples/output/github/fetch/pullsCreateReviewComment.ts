/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsCreateReviewCommentPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsCreateReviewCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsCreateReviewCommentPathParams {}

export async function pullsCreateReviewComment(props: PullsCreateReviewCommentProps) {
	const { owner, repo, pull_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/comments`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}