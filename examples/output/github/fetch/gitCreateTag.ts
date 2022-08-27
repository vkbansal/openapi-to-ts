export interface GitCreateTagPathParams {
	owner: string;
	repo: string;
}

export interface GitCreateTagRequestBody {
	/**
	 * The tag message.
	 */
	message: string;
	/**
	 * The SHA of the git object this is tagging.
	 */
	object: string;
	/**
	 * The tag's name. This is typically a version (e.g., "v0.0.1").
	 */
	tag: string;
	/**
	 * An object with information about the individual creating the tag.
	 */
	tagger?: {
		/**
		 * When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
		 */
		date?: string;
		/**
		 * The email of the author of the tag
		 */
		email?: string;
		/**
		 * The name of the author of the tag
		 */
		name?: string;
	};
	/**
	 * The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
	 */
	type: 'blob' | 'commit' | 'tree';
}

export interface GitCreateTagProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitCreateTagPathParams {
	body: GitCreateTagRequestBody;
}

export async function gitCreateTag(props: GitCreateTagProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/tags`, {
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
