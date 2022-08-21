/**
 * Content Reference attachments allow you to provide context around URLs posted in comments
 */
export interface ContentReferenceAttachment {
	/**
  * The body of the attachment
  * @example
Body of the attachment
  */
	body: string;
	/**
  * The ID of the attachment
  * @example
21
  */
	id: number;
	/**
  * The node_id of the content attachment
  * @example
MDE3OkNvbnRlbnRBdHRhY2htZW50MjE=
  */
	node_id?: string;
	/**
  * The title of the attachment
  * @example
Title of the attachment
  */
	title: string;
}
