import { ScimUser } from '../schemas/ScimUser';
/**
 * SCIM User List
 */
export interface ScimUserList {
	Resources: ScimUser[];
	/**
  * @example
10
  */
	itemsPerPage: number;
	/**
	 * SCIM schema used.
	 */
	schemas: string[];
	/**
  * @example
1
  */
	startIndex: number;
	/**
  * @example
3
  */
	totalResults: number;
}
