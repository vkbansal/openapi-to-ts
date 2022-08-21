/**
 * Blob
 */
export interface Blob {
	content: string;
	encoding: string;
	highlighted_content?: string;
	node_id: string;
	sha: string;
	size: number | null;
	/**
	 * @format uri
	 */
	url: string;
}
