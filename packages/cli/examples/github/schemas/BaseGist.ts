import { SimpleUser } from '../schemas/SimpleUser';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Base Gist
 */
export interface BaseGist {
	comments: number;
	/**
	 * @format uri
	 */
	comments_url: string;
	/**
	 * @format uri
	 */
	commits_url: string;
	/**
	 * @format date-time
	 */
	created_at: string;
	description: string | null;
	files: {
		'[key: string]'?: {
			filename?: string;
			language?: string;
			raw_url?: string;
			size?: number;
			type?: string;
		};
	};
	forks?: Array<{}>;
	/**
	 * @format uri
	 */
	forks_url: string;
	/**
	 * @format uri
	 */
	git_pull_url: string;
	/**
	 * @format uri
	 */
	git_push_url: string;
	history?: Array<{}>;
	/**
	 * @format uri
	 */
	html_url: string;
	id: string;
	node_id: string;
	owner?: SimpleUser | null;
	public: boolean;
	truncated?: boolean;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
	 * @format uri
	 */
	url: string;
	user: SimpleUser | null;
}
