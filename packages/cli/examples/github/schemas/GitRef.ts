/**
 * Git references within a repository
 */
export interface GitRef {
	node_id: string;
	object: {
		/**
  * SHA for the reference
  * @example
7638417db6d59f3c431d3e1f261cc637155684cd
  */
		sha: string;
		type: string;
		/**
		 * @format uri
		 */
		url: string;
	};
	ref: string;
	/**
	 * @format uri
	 */
	url: string;
}
