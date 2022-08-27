export interface GitGetTagPathParams {
	owner: string;
	repo: string;
	tag_sha: string;
}

export interface GitGetTagProps extends Omit<RequestInit, 'method' | 'body'>, GitGetTagPathParams {}

export async function gitGetTag(props: GitGetTagProps) {
	const { owner, repo, tag_sha, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/tags/${tag_sha}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
