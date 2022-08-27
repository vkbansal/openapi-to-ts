export interface ReposCreateReleasePathParams {
	owner: string;
	repo: string;
}

export interface ReposCreateReleaseRequestBody {
	/**
	 * Text describing the contents of the tag.
	 */
	body?: string;
	/**
	 * `true` to create a draft (unpublished) release, `false` to create a published one.
	 */
	draft?: boolean;
	/**
	 * The name of the release.
	 */
	name?: string;
	/**
	 * `true` to identify the release as a prerelease. `false` to identify the release as a full release.
	 */
	prerelease?: boolean;
	/**
	 * The name of the tag.
	 */
	tag_name: string;
	/**
	 * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
	 */
	target_commitish?: string;
}

export interface ReposCreateReleaseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateReleasePathParams {
	body: ReposCreateReleaseRequestBody;
}

export async function reposCreateRelease(props: ReposCreateReleaseProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases`, {
		method: 'POST',
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
