import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Project cards represent a scope of work.
 */
export interface ProjectCard {
	/**
	 * Whether or not the card is archived
	 */
	archived?: boolean;
	/**
  * @format uri
  * @example
https://api.github.com/projects/columns/367
  */
	column_url: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/api-playground/projects-test/issues/3
  */
	content_url?: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	creator: SimpleUser | null;
	/**
  * The project card's ID
  * @example
42
  */
	id: number;
	/**
  * @example
MDExOlByb2plY3RDYXJkMTQ3OA==
  */
	node_id: string;
	/**
  * @example
Add payload for delete Project column
  */
	note: string | null;
	/**
  * @format uri
  * @example
https://api.github.com/projects/120
  */
	project_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/projects/columns/cards/1478
  */
	url: string;
}
