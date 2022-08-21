import { OrganizationFull } from '../schemas/OrganizationFull';
import { TeamSimple } from '../schemas/TeamSimple';
/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export interface TeamFull {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * @example
A great team.
  */
	description: string | null;
	/**
  * @format uri
  * @example
https://github.com/orgs/rails/teams/core
  */
	html_url: string;
	/**
  * Unique identifier of the team
  * @example
42
  */
	id: number;
	/**
  * Distinguished Name (DN) that team maps to within LDAP environment
  * @example
uid=example,ou=users,dc=github,dc=com
  */
	ldap_dn?: string;
	/**
  * @example
3
  */
	members_count: number;
	/**
  * @example
https://api.github.com/organizations/1/team/1/members{/member}
  */
	members_url: string;
	/**
  * Name of the team
  * @example
Developers
  */
	name: string;
	/**
  * @example
MDQ6VGVhbTE=
  */
	node_id: string;
	organization: OrganizationFull;
	parent?: TeamSimple | null;
	/**
  * Permission that the team will have for its repositories
  * @example
push
  */
	permission: string;
	/**
  * The level of privacy this team should have
  * @example
closed
  */
	privacy?: 'closed' | 'secret';
	/**
  * @example
10
  */
	repos_count: number;
	/**
  * @format uri
  * @example
https://api.github.com/organizations/1/team/1/repos
  */
	repositories_url: string;
	/**
  * @example
justice-league
  */
	slug: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * URL for the team
  * @format uri
  * @example
https://api.github.com/organizations/1/team/1
  */
	url: string;
}
