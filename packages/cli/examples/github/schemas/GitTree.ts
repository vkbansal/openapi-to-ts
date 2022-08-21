/**
 * The hierarchy between files in a Git repository.
 */
export interface GitTree {
	sha: string;
	/**
  * Objects specifying a tree structure
  * @example
[object Object]
  */
	tree: Array<{
		/**
  * @example
040000
  */
		mode?: string;
		/**
  * @example
test/file.rb
  */
		path?: string;
		/**
  * @example
23f6827669e43831def8a7ad935069c8bd418261
  */
		sha?: string;
		/**
  * @example
12
  */
		size?: number;
		/**
  * @example
tree
  */
		type?: string;
		/**
  * @example
https://api.github.com/repos/owner-482f3203ecf01f67e9deb18e/BBB_Private_Repo/git/blobs/23f6827669e43831def8a7ad935069c8bd418261
  */
		url?: string;
	}>;
	truncated: boolean;
	/**
	 * @format uri
	 */
	url: string;
}
