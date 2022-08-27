export interface ReposGetCommunityProfileMetricsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetCommunityProfileMetricsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCommunityProfileMetricsPathParams {}

export async function reposGetCommunityProfileMetrics(props: ReposGetCommunityProfileMetricsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/community/profile`, {
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
