export interface ReposCompareCommitsPathParams {
	owner: string;
	repo: string;
	base: string;
	head: string;
}

export interface ReposCompareCommitsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCompareCommitsPathParams {}

export async function reposCompareCommits(props: ReposCompareCommitsProps) {
	const { owner, repo, base, head, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/compare/${base}...${head}`, {
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
