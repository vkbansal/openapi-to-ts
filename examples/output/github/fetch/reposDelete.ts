export interface ReposDeletePathParams {
	owner: string;
	repo: string;
}

export interface ReposDeleteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeletePathParams {}

export async function reposDelete(props: ReposDeleteProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}`, {
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
