/**
 * SCIM /Users provisioning endpoints
 */
export interface ScimUser {
	/**
  * The active status of the User.
  * @example
true
  */
	active: boolean;
	/**
  * The name of the user, suitable for display to end-users
  * @example
Jon Doe
  */
	displayName?: string | null;
	/**
  * user emails
  * @example
[object Object],[object Object]
  */
	emails: Array<{
		primary?: boolean;
		value: string;
	}>;
	/**
  * The ID of the User.
  * @example
a7b0f98395
  */
	externalId: string | null;
	/**
	 * associated groups
	 */
	groups?: Array<{
		display?: string;
		value?: string;
	}>;
	/**
  * Unique identifier of an external identity
  * @example
1b78eada-9baa-11e6-9eb6-a431576d590e
  */
	id: string;
	meta: {
		/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
		created?: string;
		/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
		lastModified?: string;
		/**
  * @format uri
  * @example
https://api.github.com/scim/v2/organizations/myorg-123abc55141bfd8f/Users/c42772b5-2029-11e9-8543-9264a97dec8d
  */
		location?: string;
		/**
  * @example
User
  */
		resourceType?: string;
	};
	/**
  * @example
[object Object]
  */
	name: {
		familyName: string | null;
		formatted?: string | null;
		givenName: string | null;
	};
	/**
  * Set of operations to be performed
  * @example
[object Object]
  */
	operations?: Array<{
		op: 'add' | 'remove' | 'replace';
		path?: string;
		value?: string & {
			'[key: string]'?: any;
		} & Array<{}>;
	}>;
	/**
	 * The ID of the organization.
	 */
	organization_id?: number;
	/**
	 * SCIM schema used.
	 */
	schemas: string[];
	/**
  * Configured by the admin. Could be an email, login, or username
  * @example
someone@example.com
  */
	userName: string | null;
}
