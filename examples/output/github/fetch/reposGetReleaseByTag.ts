export interface ReposGetReleaseByTagPathParams {
	owner: string;
	repo: string;
	tag: string;
}

export interface ReposGetReleaseByTagProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetReleaseByTagPathParams {}

export async function reposGetReleaseByTag(props: ReposGetReleaseByTagProps) {
	const { owner, repo, tag, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/tags/${tag}`, {
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
