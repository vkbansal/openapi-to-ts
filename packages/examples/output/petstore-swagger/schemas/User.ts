export interface User {
	email?: string;
	firstName?: string;
	/**
	 * @format int64
	 */
	id?: number;
	lastName?: string;
	password?: string;
	phone?: string;
	/**
	 * User Status
	 * @format int32
	 */
	userStatus?: number;
	username?: string;
}
