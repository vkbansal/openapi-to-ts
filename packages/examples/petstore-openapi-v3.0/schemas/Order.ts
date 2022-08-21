export interface Order {
	complete?: boolean;
	/**
  * @format int64
  * @example
10
  */
	id?: number;
	/**
  * @format int64
  * @example
198772
  */
	petId?: number;
	/**
  * @format int32
  * @example
7
  */
	quantity?: number;
	/**
	 * @format date-time
	 */
	shipDate?: string;
	/**
  * Order Status
  * @example
approved
  */
	status?: 'approved' | 'delivered' | 'placed';
}
