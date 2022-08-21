/**
 * Credential Authorization
 */
export interface CredentialAuthorization {
	/**
  * @example
12345678
  */
	authorized_credential_id?: number | null;
	/**
  * The note given to the token. This will only be present when the credential is a token.
  * @example
my token
  */
	authorized_credential_note?: string | null;
	/**
  * The title given to the ssh key. This will only be present when the credential is an ssh key.
  * @example
my ssh key
  */
	authorized_credential_title?: string | null;
	/**
  * Date when the credential was last accessed. May be null if it was never accessed
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	credential_accessed_at?: string | null;
	/**
  * Date when the credential was authorized for use.
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	credential_authorized_at: string;
	/**
  * Unique identifier for the credential.
  * @example
1
  */
	credential_id: number;
	/**
  * Human-readable description of the credential type.
  * @example
SSH Key
  */
	credential_type: string;
	/**
  * Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key.
  * @example
jklmnop12345678
  */
	fingerprint?: string;
	/**
  * User login that owns the underlying credential.
  * @example
monalisa
  */
	login: string;
	/**
  * List of oauth scopes the token has been granted.
  * @example
user,repo
  */
	scopes?: string[];
	/**
  * Last eight characters of the credential. Only included in responses with credential_type of personal access token.
  * @example
12345678
  */
	token_last_eight?: string;
}
