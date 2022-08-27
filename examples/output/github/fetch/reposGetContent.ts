export interface ReposGetContentQueryParams {
	ref?: string;
}

export interface ReposGetContentPathParams {
	owner: string;
	repo: string;
	path: string;
}

export interface ReposGetContentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetContentPathParams {
	queryParams: ReposGetContentQueryParams;
}

export async function reposGetContent(props: ReposGetContentProps) {
	const { owner, repo, path, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/contents/${path}`, {
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
