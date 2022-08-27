export interface ReposGetTopReferrersPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetTopReferrersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetTopReferrersPathParams {}

export async function reposGetTopReferrers(props: ReposGetTopReferrersProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/traffic/popular/referrers`, {
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
