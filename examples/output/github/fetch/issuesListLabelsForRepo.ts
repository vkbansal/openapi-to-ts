export interface IssuesListLabelsForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListLabelsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListLabelsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListLabelsForRepoPathParams {
	queryParams: IssuesListLabelsForRepoQueryParams;
}

export async function issuesListLabelsForRepo(props: IssuesListLabelsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/labels`, {
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
