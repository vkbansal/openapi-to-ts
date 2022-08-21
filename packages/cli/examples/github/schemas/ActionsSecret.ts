/**
 * Set secrets for GitHub Actions.
 */
export interface ActionsSecret {
	/**
	 * @format date-time
	 */
	created_at: string;
	/**
  * The name of the secret.
  * @example
SECRET_TOKEN
  */
	name: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
}
