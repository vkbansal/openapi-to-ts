export interface ReposDeletePagesSitePathParams {
	owner: string;
	repo: string;
}

export interface ReposDeletePagesSiteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeletePagesSitePathParams {}

export async function reposDeletePagesSite(props: ReposDeletePagesSiteProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages`, {
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
