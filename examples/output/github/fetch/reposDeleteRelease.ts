export interface ReposDeleteReleasePathParams {
	owner: string;
	repo: string;
	release_id: number;
}

export interface ReposDeleteReleaseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteReleasePathParams {}

export async function reposDeleteRelease(props: ReposDeleteReleaseProps) {
	const { owner, repo, release_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/${release_id}`, {
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
