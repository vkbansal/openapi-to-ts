export interface ReposGetCodeFrequencyStatsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetCodeFrequencyStatsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCodeFrequencyStatsPathParams {}

export async function reposGetCodeFrequencyStats(props: ReposGetCodeFrequencyStatsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/stats/code_frequency`, {
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
