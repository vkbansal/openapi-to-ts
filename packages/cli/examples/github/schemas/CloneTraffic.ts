import { Traffic } from '../schemas/Traffic';
/**
 * Clone Traffic
 */
export interface CloneTraffic {
	clones: Traffic[];
	/**
  * @example
173
  */
	count: number;
	/**
  * @example
128
  */
	uniques: number;
}
