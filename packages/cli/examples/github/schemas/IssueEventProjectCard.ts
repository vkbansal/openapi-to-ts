/**
 * Issue Event Project Card
 */
export interface IssueEventProjectCard {
	column_name: string;
	id: number;
	previous_column_name?: string;
	project_id: number;
	/**
	 * @format uri
	 */
	project_url: string;
	/**
	 * @format uri
	 */
	url: string;
}
