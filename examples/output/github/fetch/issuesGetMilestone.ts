export interface IssuesGetMilestonePathParams {
	owner: string;
	repo: string;
	milestone_number: number;
}

export interface IssuesGetMilestoneProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesGetMilestonePathParams {}

export async function issuesGetMilestone(props: IssuesGetMilestoneProps) {
	const { owner, repo, milestone_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/milestones/${milestone_number}`, {
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
