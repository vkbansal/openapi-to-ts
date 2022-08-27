export interface MigrationsSetLfsPreferencePathParams {
	owner: string;
	repo: string;
}

export interface MigrationsSetLfsPreferenceRequestBody {
	/**
	 * Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).
	 */
	use_lfs: 'opt_in' | 'opt_out';
}

export interface MigrationsSetLfsPreferenceProps
	extends Omit<RequestInit, 'method' | 'body'>,
		MigrationsSetLfsPreferencePathParams {
	body: MigrationsSetLfsPreferenceRequestBody;
}

export async function migrationsSetLfsPreference(props: MigrationsSetLfsPreferenceProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/import/lfs`, {
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
