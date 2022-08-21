/**
 * A repository import from an external source.
 */
export interface Import {
	authors_count?: number | null;
	/**
	 * @format uri
	 */
	authors_url: string;
	commit_count?: number | null;
	error_message?: string | null;
	failed_step?: string | null;
	has_large_files?: boolean;
	/**
	 * @format uri
	 */
	html_url: string;
	import_percent?: number | null;
	large_files_count?: number;
	large_files_size?: number;
	message?: string;
	project_choices?: Array<{
		human_name?: string;
		tfvc_project?: string;
		vcs?: string;
	}>;
	push_percent?: number | null;
	/**
	 * @format uri
	 */
	repository_url: string;
	status:
		| 'auth'
		| 'auth_failed'
		| 'choose'
		| 'complete'
		| 'detecting'
		| 'detection_found_multiple'
		| 'detection_found_nothing'
		| 'detection_needs_auth'
		| 'error'
		| 'importing'
		| 'mapping'
		| 'none'
		| 'pushing'
		| 'setup'
		| 'unknown'
		| 'waiting_to_push';
	status_text?: string | null;
	svc_root?: string;
	svn_root?: string;
	tfvc_project?: string;
	/**
	 * @format uri
	 */
	url: string;
	use_lfs?: string;
	vcs: string | null;
	/**
	 * The URL of the originating repository.
	 */
	vcs_url: string;
}
