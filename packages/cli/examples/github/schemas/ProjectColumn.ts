/**
 * Project columns contain cards of work.
 */
export interface ProjectColumn {
	/**
  * @format uri
  * @example
https://api.github.com/projects/columns/367/cards
  */
	cards_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	/**
  * The unique identifier of the project column
  * @example
42
  */
	id: number;
	/**
  * Name of the project column
  * @example
Remaining tasks
  */
	name: string;
	/**
  * @example
MDEzOlByb2plY3RDb2x1bW4zNjc=
  */
	node_id: string;
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
https://api.github.com/projects/columns/367
  */
	url: string;
}
