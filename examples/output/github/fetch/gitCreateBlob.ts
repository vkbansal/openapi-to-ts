export interface GitCreateBlobPathParams {
	owner: string;
	repo: string;
}

export interface GitCreateBlobRequestBody {
	/**
	 * The new blob's content.
	 */
	content: string;
	/**
	 * The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.
	 * @default "utf-8"
	 */
	encoding?: string;
}

export interface GitCreateBlobProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitCreateBlobPathParams {
	body: GitCreateBlobRequestBody;
}

export async function gitCreateBlob(props: GitCreateBlobProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/blobs`, {
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
