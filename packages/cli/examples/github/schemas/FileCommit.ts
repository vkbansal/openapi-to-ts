/**
 * File Commit
 */
export interface FileCommit {
	commit: {
		author?: {
			date?: string;
			email?: string;
			name?: string;
		};
		committer?: {
			date?: string;
			email?: string;
			name?: string;
		};
		html_url?: string;
		message?: string;
		node_id?: string;
		parents?: Array<{
			html_url?: string;
			sha?: string;
			url?: string;
		}>;
		sha?: string;
		tree?: {
			sha?: string;
			url?: string;
		};
		url?: string;
		verification?: {
			payload?: string | null;
			reason?: string;
			signature?: string | null;
			verified?: boolean;
		};
	};
	content: {
		_links?: {
			git?: string;
			html?: string;
			self?: string;
		};
		download_url?: string;
		git_url?: string;
		html_url?: string;
		name?: string;
		path?: string;
		sha?: string;
		size?: number;
		type?: string;
		url?: string;
	} | null;
}
