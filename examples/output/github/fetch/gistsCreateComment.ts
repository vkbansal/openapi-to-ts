export interface GistsCreateCommentPathParams {
	gist_id: string;
}

export interface GistsCreateCommentRequestBody {
	/**
	 * The comment text.
	 * @example "Body of the attachment"
	 */
	body: string;
}

export interface GistsCreateCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsCreateCommentPathParams {
	body: GistsCreateCommentRequestBody;
}

export async function gistsCreateComment(props: GistsCreateCommentProps) {
	const { gist_id, body, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/comments`, {
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
