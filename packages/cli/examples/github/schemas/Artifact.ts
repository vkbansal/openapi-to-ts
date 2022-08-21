/**
 * An artifact
 */
export interface Artifact {
	/**
  * @example
https://api.github.com/repos/github/hello-world/actions/artifacts/5/zip
  */
	archive_download_url: string;
	/**
	 * @format date-time
	 */
	created_at: string | null;
	/**
	 * Whether or not the artifact has expired.
	 */
	expired: boolean;
	/**
	 * @format date-time
	 */
	expires_at: string;
	/**
  * @example
5
  */
	id: number;
	/**
  * The name of the artifact.
  * @example
AdventureWorks.Framework
  */
	name: string;
	/**
  * @example
MDEwOkNoZWNrU3VpdGU1
  */
	node_id: string;
	/**
  * The size in bytes of the artifact.
  * @example
12345
  */
	size_in_bytes: number;
	/**
	 * @format date-time
	 */
	updated_at: string | null;
	/**
  * @example
https://api.github.com/repos/github/hello-world/actions/artifacts/5
  */
	url: string;
}
