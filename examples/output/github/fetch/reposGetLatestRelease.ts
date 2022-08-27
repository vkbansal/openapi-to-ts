export interface ReposGetLatestReleasePathParams {
	owner: string;
	repo: string;
}

export interface ReposGetLatestReleaseProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetLatestReleasePathParams {}

export async function reposGetLatestRelease(props: ReposGetLatestReleaseProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/latest`, {
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
