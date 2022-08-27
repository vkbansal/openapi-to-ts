/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface GistsDeleteCommentPathParams {
	gist_id: string;
	comment_id: number;
}

export interface GistsDeleteCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsDeleteCommentPathParams {}

export async function gistsDeleteComment(props: GistsDeleteCommentProps) {
	const { gist_id, comment_id, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/comments/${comment_id}`, {
		method: 'DELETE',
		...rest,
	});

	const json = await response.json();

	return json;
}