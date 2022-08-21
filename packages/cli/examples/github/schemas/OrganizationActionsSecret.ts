/**
 * Secrets for GitHub Actions for an organization.
 */
export interface OrganizationActionsSecret {
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
  * @format uri
  * @example
https://api.github.com/organizations/org/secrets/my_secret/repositories
  */
	selected_repositories_url?: string;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
	 * Visibility of a secret
	 */
	visibility: 'all' | 'private' | 'selected';
}
