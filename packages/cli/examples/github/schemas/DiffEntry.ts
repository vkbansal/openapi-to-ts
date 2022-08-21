/**
 * Diff Entry
 */
export interface DiffEntry {
	/**
  * @example
103
  */
	additions: number;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/blob/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt
  */
	blob_url: string;
	/**
  * @example
124
  */
	changes: number;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/contents/file1.txt?ref=6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
	contents_url: string;
	/**
  * @example
21
  */
	deletions: number;
	/**
  * @example
file1.txt
  */
	filename: string;
	/**
  * @example
@@ -132,7 +132,7 @@ module Test @@ -1000,7 +1000,7 @@ module Test
  */
	patch?: string;
	/**
  * @example
file.txt
  */
	previous_filename?: string;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/raw/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt
  */
	raw_url: string;
	/**
  * @example
bbcd538c8e72b8c175046e27cc8f907076331401
  */
	sha: string;
	/**
  * @example
added
  */
	status: string;
}
