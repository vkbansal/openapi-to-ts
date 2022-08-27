export interface AppsCreateContentAttachmentPathParams {
	content_reference_id: number;
}

export interface AppsCreateContentAttachmentRequestBody {
	/**
	 * The body of the attachment
	 * @example "Body of the attachment"
	 */
	body: string;
	/**
	 * The title of the attachment
	 * @example "Title of the attachment"
	 */
	title: string;
}

export interface AppsCreateContentAttachmentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsCreateContentAttachmentPathParams {
	body: AppsCreateContentAttachmentRequestBody;
}

export async function appsCreateContentAttachment(props: AppsCreateContentAttachmentProps) {
	const { content_reference_id, body, ...rest } = props;

	const response = await fetch(`/content_references/${content_reference_id}/attachments`, {
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
