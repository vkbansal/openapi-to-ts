export interface ReposGetPagesBuildPathParams {
	owner: string;
	repo: string;
	build_id: number;
}

export interface ReposGetPagesBuildProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetPagesBuildPathParams {}

export async function reposGetPagesBuild(props: ReposGetPagesBuildProps) {
	const { owner, repo, build_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages/builds/${build_id}`, {
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
