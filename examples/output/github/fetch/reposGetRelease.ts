export interface ReposGetReleasePathParams {
	owner: string;
	repo: string;
	release_id: number;
}

export interface ReposGetReleaseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetReleasePathParams {}

export async function reposGetRelease(props: ReposGetReleaseProps) {
	const { owner, repo, release_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/${release_id}`, {
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
