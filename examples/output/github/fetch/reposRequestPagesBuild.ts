export interface ReposRequestPagesBuildPathParams {
	owner: string;
	repo: string;
}

export interface ReposRequestPagesBuildProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRequestPagesBuildPathParams {}

export async function reposRequestPagesBuild(props: ReposRequestPagesBuildProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages/builds`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
