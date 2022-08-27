/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReactionsListForCommitCommentQueryParams {
	content?: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
	per_page?: number;
	page?: number;
}

export interface ReactionsListForCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsListForCommitCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForCommitCommentPathParams {
	queryParams: ReactionsListForCommitCommentQueryParams;
}

export async function reactionsListForCommitComment(props: ReactionsListForCommitCommentProps) {
	const { owner, repo, comment_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/comments/${comment_id}/reactions`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
