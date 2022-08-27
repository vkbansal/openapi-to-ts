export interface ReposCreateCommitStatusPathParams {
	owner: string;
	repo: string;
	sha: string;
}

export interface ReposCreateCommitStatusRequestBody {
	/**
	 * A string label to differentiate this status from the status of other systems. This field is case-insensitive.
	 * @default "default"
	 */
	context?: string;
	/**
	 * A short description of the status.
	 */
	description?: string;
	/**
	 * The state of the status. Can be one of `error`, `failure`, `pending`, or `success`.
	 */
	state: 'error' | 'failure' | 'pending' | 'success';
	/**
	 * The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.
	 * For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:
	 * `http://ci.example.com/user/repo/build/sha`
	 */
	target_url?: string;
}

export interface ReposCreateCommitStatusProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateCommitStatusPathParams {
	body: ReposCreateCommitStatusRequestBody;
}

export async function reposCreateCommitStatus(props: ReposCreateCommitStatusProps) {
	const { owner, repo, sha, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/statuses/${sha}`, {
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
