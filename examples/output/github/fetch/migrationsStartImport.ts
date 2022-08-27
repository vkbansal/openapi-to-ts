export interface MigrationsStartImportPathParams {
	owner: string;
	repo: string;
}

export interface MigrationsStartImportRequestBody {
	/**
	 * For a tfvc import, the name of the project that is being imported.
	 */
	tfvc_project?: string;
	/**
	 * The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
	 */
	vcs?: 'git' | 'mercurial' | 'subversion' | 'tfvc';
	/**
	 * If authentication is required, the password to provide to `vcs_url`.
	 */
	vcs_password?: string;
	/**
	 * The URL of the originating repository.
	 */
	vcs_url: string;
	/**
	 * If authentication is required, the username to provide to `vcs_url`.
	 */
	vcs_username?: string;
}

export interface MigrationsStartImportProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsStartImportPathParams {
	body: MigrationsStartImportRequestBody;
}

export async function migrationsStartImport(props: MigrationsStartImportProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/import`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
