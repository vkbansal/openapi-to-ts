import { SimpleUser } from '../schemas/SimpleUser';
/**
 * A team's access to a project.
 */
export interface TeamProject {
	body: string | null;
	columns_url: string;
	created_at: string;
	creator: SimpleUser;
	html_url: string;
	id: number;
	name: string;
	node_id: string;
	number: number;
	/**
	 * The organization permission for this project. Only present when owner is an organization.
	 */
	organization_permission?: string;
	owner_url: string;
	permissions: {
		admin: boolean;
		read: boolean;
		write: boolean;
	};
	/**
	 * Whether the project is private or not. Only present when owner is an organization.
	 */
	private?: boolean;
	state: string;
	updated_at: string;
	url: string;
}
