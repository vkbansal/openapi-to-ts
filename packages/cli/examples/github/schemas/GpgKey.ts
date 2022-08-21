/**
 * A unique encryption key
 */
export interface GpgKey {
	/**
  * @example
true
  */
	can_certify: boolean;
	can_encrypt_comms: boolean;
	can_encrypt_storage: boolean;
	/**
  * @example
true
  */
	can_sign: boolean;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @example
[object Object]
  */
	emails: Array<{
		email?: string;
		verified?: boolean;
	}>;
	/**
	 * @format date-time
	 */
	expires_at: string | null;
	/**
  * @example
3
  */
	id: number;
	/**
  * @example
3262EFF25BA0D270
  */
	key_id: string;
	primary_key_id: number | null;
	/**
  * @example
xsBNBFayYZ...
  */
	public_key: string;
	raw_key: string | null;
	/**
  * @example
[object Object]
  */
	subkeys: Array<{
		can_certify?: boolean;
		can_encrypt_comms?: boolean;
		can_encrypt_storage?: boolean;
		can_sign?: boolean;
		created_at?: string;
		emails?: Array<{}>;
		expires_at?: string | null;
		id?: number;
		key_id?: string;
		primary_key_id?: number;
		public_key?: string;
		raw_key?: string | null;
		subkeys?: Array<{}>;
	}>;
}
