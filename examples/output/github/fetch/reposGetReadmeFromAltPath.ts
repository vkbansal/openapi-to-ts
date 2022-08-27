export interface ReposGetReadmeFromAltPathQueryParams {
	ref?: string;
}

export interface ReposGetReadmeFromAltPathPathParams {
	owner: string;
	repo: string;
	dir: string;
}

export interface ReposGetReadmeFromAltPathProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetReadmeFromAltPathPathParams {
	queryParams: ReposGetReadmeFromAltPathQueryParams;
}

export async function reposGetReadmeFromAltPath(props: ReposGetReadmeFromAltPathProps) {
	const { owner, repo, dir, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/readme/${dir}`, {
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
