/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

/**
 * The public key used for setting Actions Secrets.
 */
export interface ActionsPublicKey {
	/**
	 * @example "2011-01-26T19:01:12Z"
	 */
	created_at?: string;
	/**
	 * @example 2
	 */
	id?: number;
	/**
	 * The Base64 encoded public key.
	 * @example "hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs="
	 */
	key: string;
	/**
	 * The identifier for the key.
	 * @example "1234567"
	 */
	key_id: string;
	/**
	 * @example "ssh-rsa AAAAB3NzaC1yc2EAAA"
	 */
	title?: string;
	/**
	 * @example "https://api.github.com/user/keys/2"
	 */
	url?: string;
}
