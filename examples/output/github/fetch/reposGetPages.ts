export interface ReposGetPagesPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetPagesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetPagesPathParams {}

export async function reposGetPages(props: ReposGetPagesProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages`, {
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
