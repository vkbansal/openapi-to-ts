export interface SimpleCommitStatus {
	/**
	 * @format uri
	 */
	avatar_url: string | null;
	context: string;
	/**
	 * @format date-time
	 */
	created_at: string;
	description: string | null;
	id: number;
	node_id: string;
	required?: boolean | null;
	state: string;
	/**
	 * @format uri
	 */
	target_url: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
	 * @format uri
	 */
	url: string;
}
