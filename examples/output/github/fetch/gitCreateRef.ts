export interface GitCreateRefPathParams {
	owner: string;
	repo: string;
}

export interface GitCreateRefRequestBody {
	/**
	 * @example "\"refs/heads/newbranch\""
	 */
	key?: string;
	/**
	 * The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
	 */
	ref: string;
	/**
	 * The SHA1 value for this reference.
	 */
	sha: string;
}

export interface GitCreateRefProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitCreateRefPathParams {
	body: GitCreateRefRequestBody;
}

export async function gitCreateRef(props: GitCreateRefProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/refs`, {
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
