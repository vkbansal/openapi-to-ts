export interface ReposGetCommitActivityStatsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetCommitActivityStatsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCommitActivityStatsPathParams {}

export async function reposGetCommitActivityStats(props: ReposGetCommitActivityStatsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/stats/commit_activity`, {
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
