export interface ReposGetPunchCardStatsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetPunchCardStatsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetPunchCardStatsPathParams {}

export async function reposGetPunchCardStats(props: ReposGetPunchCardStatsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/stats/punch_card`, {
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
