export interface GitUpdateRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface GitUpdateRefRequestBody {
	/**
	 * Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.
	 */
	force?: boolean;
	/**
	 * The SHA1 value to set this reference to
	 */
	sha: string;
}

export interface GitUpdateRefProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitUpdateRefPathParams {
	body: GitUpdateRefRequestBody;
}

export async function gitUpdateRef(props: GitUpdateRefProps) {
	const { owner, repo, ref, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/refs/${ref}`, {
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
