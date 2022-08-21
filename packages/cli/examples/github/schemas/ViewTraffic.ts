import { Traffic } from '../schemas/Traffic';
/**
 * View Traffic
 */
export interface ViewTraffic {
	/**
  * @example
14850
  */
	count: number;
	/**
  * @example
3782
  */
	uniques: number;
	views: Traffic[];
}
