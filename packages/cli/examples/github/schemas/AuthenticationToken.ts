import { Repository } from '../schemas/Repository';
/**
 * Authentication Token
 */
export interface AuthenticationToken {
	/**
  * The time this token expires
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	expires_at: string;
	/**
  * @example
[object Object]
  */
	permissions?: {
		'[key: string]'?: any;
	};
	/**
	 * The repositories this token has access to
	 */
	repositories?: Repository[];
	/**
	 * Describe whether all repositories have been selected or there's a selection involved
	 */
	repository_selection?: 'all' | 'selected';
	/**
  * @example
config.yaml
  */
	single_file?: string | null;
	/**
  * The token used for authentication
  * @example
v1.1f699f1069f60xxx
  */
	token: string;
}
