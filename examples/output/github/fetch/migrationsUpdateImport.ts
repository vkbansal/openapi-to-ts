export interface MigrationsUpdateImportPathParams {
	owner: string;
	repo: string;
}

export interface MigrationsUpdateImportRequestBody {
	/**
	 * @example "\"project1\""
	 */
	tfvc_project?: string;
	/**
	 * @example "\"git\""
	 */
	vcs?: string;
	/**
	 * The password to provide to the originating repository.
	 */
	vcs_password?: string;
	/**
	 * The username to provide to the originating repository.
	 */
	vcs_username?: string;
}

export interface MigrationsUpdateImportProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsUpdateImportPathParams {
	body: MigrationsUpdateImportRequestBody;
}

export async function migrationsUpdateImport(props: MigrationsUpdateImportProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/import`, {
		method: 'PATCH',
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
