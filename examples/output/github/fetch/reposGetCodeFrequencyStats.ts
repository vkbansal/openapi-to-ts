/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
