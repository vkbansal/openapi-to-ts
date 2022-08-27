export interface IssuesListLabelsForMilestoneQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListLabelsForMilestonePathParams {
	owner: string;
	repo: string;
	milestone_number: number;
}

export interface IssuesListLabelsForMilestoneProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListLabelsForMilestonePathParams {
	queryParams: IssuesListLabelsForMilestoneQueryParams;
}

export async function issuesListLabelsForMilestone(props: IssuesListLabelsForMilestoneProps) {
	const { owner, repo, milestone_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/milestones/${milestone_number}/labels`, {
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
