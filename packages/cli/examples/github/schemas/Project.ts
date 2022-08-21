import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Projects are a way to organize columns and cards of work.
 */
export interface Project {
	/**
  * Body of the project
  * @example
This project represents the sprint of the first week in January
  */
	body: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/projects/1002604/columns
  */
	columns_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	creator: SimpleUser | null;
	/**
  * @format uri
  * @example
https://github.com/api-playground/projects-test/projects/12
  */
	html_url: string;
	/**
  * @example
1002604
  */
	id: number;
	/**
  * Name of the project
  * @example
Week One Sprint
  */
	name: string;
	/**
  * @example
MDc6UHJvamVjdDEwMDI2MDQ=
  */
	node_id: string;
	/**
  * @example
1
  */
	number: number;
	/**
	 * The baseline permission that all organization members have on this project. Only present if owner is an organization.
	 */
	organization_permission?: 'admin' | 'none' | 'read' | 'write';
	/**
  * @format uri
  * @example
https://api.github.com/repos/api-playground/projects-test
  */
	owner_url: string;
	/**
	 * Whether or not this project can be seen by everyone. Only present if owner is an organization.
	 */
	private?: boolean;
	/**
  * State of the project; either 'open' or 'closed'
  * @example
open
  */
	state: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/projects/1002604
  */
	url: string;
}
