export interface GistsUpdateCommentPathParams {
	gist_id: string;
	comment_id: number;
}

export interface GistsUpdateCommentRequestBody {
	/**
	 * The comment text.
	 * @example "Body of the attachment"
	 */
	body: string;
}

export interface GistsUpdateCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsUpdateCommentPathParams {
	body: GistsUpdateCommentRequestBody;
}

export async function gistsUpdateComment(props: GistsUpdateCommentProps) {
	const { gist_id, comment_id, body, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/comments/${comment_id}`, {
		method: 'PATCH',
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
