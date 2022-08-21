import { TeamSimple } from '../schemas/TeamSimple';
/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export interface Team {
	description: string | null;
	/**
  * @format uri
  * @example
https://github.com/orgs/rails/teams/core
  */
	html_url: string;
	id: number;
	members_url: string;
	name: string;
	node_id: string;
	parent?: TeamSimple | null;
	permission: string;
	privacy?: string;
	/**
	 * @format uri
	 */
	repositories_url: string;
	slug: string;
	/**
	 * @format uri
	 */
	url: string;
}
