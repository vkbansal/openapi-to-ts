/**
 * Tag
 */
export interface Tag {
	commit: {
		sha: string;
		/**
		 * @format uri
		 */
		url: string;
	};
	/**
  * @example
v0.1
  */
	name: string;
	node_id: string;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/tarball/v0.1
  */
	tarball_url: string;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/zipball/v0.1
  */
	zipball_url: string;
}
