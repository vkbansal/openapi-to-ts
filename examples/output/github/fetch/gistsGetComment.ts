export interface GistsGetCommentPathParams {
	gist_id: string;
	comment_id: number;
}

export interface GistsGetCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsGetCommentPathParams {}

export async function gistsGetComment(props: GistsGetCommentProps) {
	const { gist_id, comment_id, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/comments/${comment_id}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
