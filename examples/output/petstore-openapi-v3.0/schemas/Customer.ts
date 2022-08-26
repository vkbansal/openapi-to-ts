import { Address } from '../schemas/Address';

export interface Customer {
	address?: Address[];
	/**
	 * @format int64
	 * @example 100000
	 */
	id?: number;
	/**
	 * @example fehguy
	 */
	username?: string;
}
