export interface ReposCreateOrUpdateFileContentsPathParams {
	owner: string;
	repo: string;
	path: string;
}

export interface ReposCreateOrUpdateFileContentsRequestBody {
	/**
	 * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
	 */
	author?: {
		/**
		 * @example "\"2013-01-15T17:13:22+05:00\""
		 */
		date?: string;
		/**
		 * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
		 */
		email: string;
		/**
		 * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
		 */
		name: string;
	};
	/**
	 * The branch name. Default: the repository’s default branch (usually `master`)
	 */
	branch?: string;
	/**
	 * The person that committed the file. Default: the authenticated user.
	 */
	committer?: {
		/**
		 * @example "\"2013-01-05T13:13:22+05:00\""
		 */
		date?: string;
		/**
		 * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
		 */
		email: string;
		/**
		 * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
		 */
		name: string;
	};
	/**
	 * The new file content, using Base64 encoding.
	 */
	content: string;
	/**
	 * The commit message.
	 */
	message: string;
	/**
	 * **Required if you are updating a file**. The blob SHA of the file being replaced.
	 */
	sha?: string;
}

export interface ReposCreateOrUpdateFileContentsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateOrUpdateFileContentsPathParams {
	body: ReposCreateOrUpdateFileContentsRequestBody;
}

export async function reposCreateOrUpdateFileContents(props: ReposCreateOrUpdateFileContentsProps) {
	const { owner, repo, path, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/contents/${path}`, {
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
