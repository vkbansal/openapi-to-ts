export interface Order {
	complete?: boolean;
	/**
	 * @format int64
	 */
	id?: number;
	/**
	 * @format int64
	 */
	petId?: number;
	/**
	 * @format int32
	 */
	quantity?: number;
	/**
	 * @format date-time
	 */
	shipDate?: string;
	/**
	 * Order Status
	 */
	status?: 'approved' | 'delivered' | 'placed';
}
