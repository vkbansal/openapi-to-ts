/**
 * External Groups to be mapped to a team for membership
 */
export interface GroupMapping {
	/**
  * Array of groups to be mapped to this team
  * @example
[object Object],[object Object]
  */
	groups?: Array<{
		/**
  * a description of the group
  * @example
A group of Developers working on AzureAD SAML SSO
  */
		group_description: string;
		/**
  * The ID of the group
  * @example
111a1a11-aaa1-1aaa-11a1-a1a1a1a1a1aa
  */
		group_id: string;
		/**
  * The name of the group
  * @example
saml-azuread-test
  */
		group_name: string;
		/**
  * synchronization status for this group mapping
  * @example
unsynced
  */
		status?: string;
		/**
  * the time of the last sync for this group-mapping
  * @example
2019-06-03 22:27:15:000 -700
  */
		synced_at?: string;
	}>;
}
