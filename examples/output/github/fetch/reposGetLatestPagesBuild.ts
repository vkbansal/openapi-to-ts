export interface ReposGetLatestPagesBuildPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetLatestPagesBuildProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetLatestPagesBuildPathParams {}

export async function reposGetLatestPagesBuild(props: ReposGetLatestPagesBuildProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages/builds/latest`, {
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
