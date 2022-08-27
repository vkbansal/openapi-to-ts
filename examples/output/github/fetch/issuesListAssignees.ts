export interface IssuesListAssigneesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListAssigneesPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListAssigneesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListAssigneesPathParams {
	queryParams: IssuesListAssigneesQueryParams;
}

export async function issuesListAssignees(props: IssuesListAssigneesProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/assignees`, {
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
