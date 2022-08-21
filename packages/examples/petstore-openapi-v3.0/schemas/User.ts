export interface User {
	/**
  * @example
john@email.com
  */
	email?: string;
	/**
  * @example
John
  */
	firstName?: string;
	/**
  * @format int64
  * @example
10
  */
	id?: number;
	/**
  * @example
James
  */
	lastName?: string;
	/**
  * @example
12345
  */
	password?: string;
	/**
  * @example
12345
  */
	phone?: string;
	/**
  * User Status
  * @format int32
  * @example
1
  */
	userStatus?: number;
	/**
  * @example
theUser
  */
	username?: string;
}