/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface AppsCreateContentAttachmentPathParams {
	content_reference_id: number;
}

export interface AppsCreateContentAttachmentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsCreateContentAttachmentPathParams {}

export async function appsCreateContentAttachment(props: AppsCreateContentAttachmentProps) {
	const { content_reference_id, ...rest } = props;

	const response = await fetch(`/content_references/${content_reference_id}/attachments`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}