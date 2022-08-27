export interface ReposGetReadmeQueryParams {
	ref?: string;
}

export interface ReposGetReadmePathParams {
	owner: string;
	repo: string;
}

export interface ReposGetReadmeProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetReadmePathParams {
	queryParams: ReposGetReadmeQueryParams;
}

export async function reposGetReadme(props: ReposGetReadmeProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/readme`, {
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
