export interface ReposUpdateReleasePathParams {
	owner: string;
	repo: string;
	release_id: number;
}

export interface ReposUpdateReleaseRequestBody {
	/**
	 * Text describing the contents of the tag.
	 */
	body?: string;
	/**
	 * `true` makes the release a draft, and `false` publishes the release.
	 */
	draft?: boolean;
	/**
	 * The name of the release.
	 */
	name?: string;
	/**
	 * `true` to identify the release as a prerelease, `false` to identify the release as a full release.
	 */
	prerelease?: boolean;
	/**
	 * The name of the tag.
	 */
	tag_name?: string;
	/**
	 * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
	 */
	target_commitish?: string;
}

export interface ReposUpdateReleaseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateReleasePathParams {
	body: ReposUpdateReleaseRequestBody;
}

export async function reposUpdateRelease(props: ReposUpdateReleaseProps) {
	const { owner, repo, release_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/${release_id}`, {
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
