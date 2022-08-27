export interface ReposGetPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetProps extends Omit<RequestInit, 'method' | 'body'>, ReposGetPathParams {}

export async function reposGet(props: ReposGetProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}`, {
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
