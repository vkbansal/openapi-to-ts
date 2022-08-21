import { OrganizationSimple } from '../schemas/OrganizationSimple';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Org Membership
 */
export interface OrgMembership {
	organization: OrganizationSimple;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/octocat
  */
	organization_url: string;
	permissions?: {
		can_create_repository: boolean;
	};
	/**
  * @example
admin
  */
	role: string;
	/**
  * @example
active
  */
	state: string;
	/**
  * @format uri
  * @example
https://api.github.com/orgs/octocat/memberships/defunkt
  */
	url: string;
	user: SimpleUser | null;
}
