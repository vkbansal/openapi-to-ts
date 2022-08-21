/**
 * Page Build Status
 */
export interface PageBuildStatus {
	/**
  * @example
queued
  */
	status: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/github/hello-world/pages/builds/latest
  */
	url: string;
}
