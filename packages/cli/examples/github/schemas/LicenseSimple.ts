/**
 * License Simple
 */
export interface LicenseSimple {
	/**
	 * @format uri
	 */
	html_url?: string;
	/**
  * @example
mit
  */
	key: string;
	/**
  * @example
MIT License
  */
	name: string;
	/**
  * @example
MDc6TGljZW5zZW1pdA==
  */
	node_id: string;
	/**
  * @example
MIT
  */
	spdx_id: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/licenses/mit
  */
	url: string | null;
}
