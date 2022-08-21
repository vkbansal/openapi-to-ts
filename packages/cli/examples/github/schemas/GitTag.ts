import { Verification } from '../schemas/Verification';
/**
 * Metadata for a Git tag
 */
export interface GitTag {
	/**
  * Message describing the purpose of the tag
  * @example
Initial public release
  */
	message: string;
	/**
  * @example
MDM6VGFnOTQwYmQzMzYyNDhlZmFlMGY5ZWU1YmM3YjJkNWM5ODU4ODdiMTZhYw==
  */
	node_id: string;
	object: {
		sha: string;
		type: string;
		/**
		 * @format uri
		 */
		url: string;
	};
	/**
  * @example
940bd336248efae0f9ee5bc7b2d5c985887b16ac
  */
	sha: string;
	/**
  * Name of the tag
  * @example
v0.0.1
  */
	tag: string;
	tagger: {
		date: string;
		email: string;
		name: string;
	};
	/**
  * URL for the tag
  * @format uri
  * @example
https://api.github.com/repositories/42/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac
  */
	url: string;
	verification?: Verification;
}
