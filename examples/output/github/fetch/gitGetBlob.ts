export interface GitGetBlobPathParams {
	owner: string;
	repo: string;
	file_sha: string;
}

export interface GitGetBlobProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitGetBlobPathParams {}

export async function gitGetBlob(props: GitGetBlobProps) {
	const { owner, repo, file_sha, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/blobs/${file_sha}`, {
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
