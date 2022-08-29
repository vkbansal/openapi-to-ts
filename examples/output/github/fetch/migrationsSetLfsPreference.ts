/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

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

/**
 * You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).
 */
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
