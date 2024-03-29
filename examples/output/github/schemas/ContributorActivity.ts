/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { SimpleUser } from '../schemas/SimpleUser';

/**
 * Contributor Activity
 */
export interface ContributorActivity {
	author: SimpleUser | null;
	/**
	 * @example 135
	 */
	total: number;
	/**
	 * @example [{"a":6898,"c":10,"d":77,"w":"1367712000"}]
	 */
	weeks: Array<{
		a?: number;
		c?: number;
		d?: number;
		w?: string;
	}>;
}
