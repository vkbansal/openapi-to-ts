/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export type TeamSimple = {
	/**
  * Description of the team
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
1
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
https://api.github.com/organizations/1/team/1/members{/member}
  */
	members_url: string;
	/**
  * Name of the team
  * @example
Justice League
  */
	name: string;
	/**
  * @example
MDQ6VGVhbTE=
  */
	node_id: string;
	/**
  * Permission that the team will have for its repositories
  * @example
admin
  */
	permission: string;
	/**
  * The level of privacy this team should have
  * @example
closed
  */
	privacy?: string;
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
  * URL for the team
  * @format uri
  * @example
https://api.github.com/organizations/1/team/1
  */
	url: string;
} | null;
