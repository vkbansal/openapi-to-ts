import { SimpleUser } from '../schemas/SimpleUser';
/**
 * The authorization associated with an OAuth Access.
 */
export interface ApplicationGrant {
	app: {
		client_id: string;
		name: string;
		/**
		 * @format uri
		 */
		url: string;
	};
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @example
1
  */
	id: number;
	/**
  * @example
public_repo
  */
	scopes: string[];
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/applications/grants/1
  */
	url: string;
	user?: SimpleUser | null;
}
