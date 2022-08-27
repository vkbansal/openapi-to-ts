export interface ReposGetTopPathsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetTopPathsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetTopPathsPathParams {}

export async function reposGetTopPaths(props: ReposGetTopPathsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/traffic/popular/paths`, {
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
