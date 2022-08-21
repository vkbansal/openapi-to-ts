/**
 * An enterprise account
 */
export interface Enterprise {
	/**
	 * @format uri
	 */
	avatar_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string | null;
	/**
	 * A short description of the enterprise.
	 */
	description?: string | null;
	/**
  * @format uri
  * @example
https://github.com/enterprises/octo-business
  */
	html_url: string;
	/**
  * Unique identifier of the enterprise
  * @example
42
  */
	id: number;
	/**
  * The name of the enterprise.
  * @example
Octo Business
  */
	name: string;
	/**
  * @example
MDEwOlJlcG9zaXRvcnkxMjk2MjY5
  */
	node_id: string;
	/**
  * The slug url identifier for the enterprise.
  * @example
octo-business
  */
	slug: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string | null;
	/**
	 * The enterprise's website URL.
	 * @format uri
	 */
	website_url?: string | null;
}
