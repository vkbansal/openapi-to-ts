/**
 * The public key used for setting Actions Secrets.
 */
export interface ActionsPublicKey {
	/**
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at?: string;
	/**
  * @example
2
  */
	id?: number;
	/**
  * The Base64 encoded public key.
  * @example
hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs=
  */
	key: string;
	/**
  * The identifier for the key.
  * @example
1234567
  */
	key_id: string;
	/**
  * @example
ssh-rsa AAAAB3NzaC1yc2EAAA
  */
	title?: string;
	/**
  * @example
https://api.github.com/user/keys/2
  */
	url?: string;
}
