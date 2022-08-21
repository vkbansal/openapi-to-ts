import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Contributor Activity
 */
export interface ContributorActivity {
	author: SimpleUser | null;
	/**
  * @example
135
  */
	total: number;
	/**
  * @example
[object Object]
  */
	weeks: Array<{
		a?: number;
		c?: number;
		d?: number;
		w?: string;
	}>;
}
