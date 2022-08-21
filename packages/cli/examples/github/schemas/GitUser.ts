/**
 * Metaproperties for Git author/committer information.
 */
export interface GitUser {
	/**
  * @example
"2007-10-29T02:42:39.000-07:00"
  */
	date?: string;
	/**
  * @example
"chris@ozmm.org"
  */
	email?: string;
	/**
  * @example
"Chris Wanstrath"
  */
	name?: string;
}
