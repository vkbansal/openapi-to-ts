export interface ReposDeleteFilePathParams {
	owner: string;
	repo: string;
	path: string;
}

export interface ReposDeleteFileProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteFilePathParams {}

export async function reposDeleteFile(props: ReposDeleteFileProps) {
	const { owner, repo, path, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/contents/${path}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
