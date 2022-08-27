export interface ReposGetContributorsStatsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetContributorsStatsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetContributorsStatsPathParams {}

export async function reposGetContributorsStats(props: ReposGetContributorsStatsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/stats/contributors`, {
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
