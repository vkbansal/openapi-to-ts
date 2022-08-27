export interface ReposGetParticipationStatsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetParticipationStatsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetParticipationStatsPathParams {}

export async function reposGetParticipationStats(props: ReposGetParticipationStatsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/stats/participation`, {
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
