import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Gist Simple
 */
export interface GistSimple {
	comments?: number;
	comments_url?: string;
	commits_url?: string;
	created_at?: string;
	description?: string | null;
	files?: {
		'[key: string]'?: {
			content?: string;
			filename?: string;
			language?: string;
			raw_url?: string;
			size?: number;
			truncated?: boolean;
			type?: string;
		} | null;
	};
	forks_url?: string;
	git_pull_url?: string;
	git_push_url?: string;
	html_url?: string;
	id?: string;
	node_id?: string;
	owner?: SimpleUser;
	public?: boolean;
	truncated?: boolean;
	updated_at?: string;
	url?: string;
	user?: string | null;
}
