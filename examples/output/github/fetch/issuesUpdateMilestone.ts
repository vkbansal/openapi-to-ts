/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface IssuesUpdateMilestonePathParams {
	owner: string;
	repo: string;
	milestone_number: number;
}

export interface IssuesUpdateMilestoneProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesUpdateMilestonePathParams {}

export async function issuesUpdateMilestone(props: IssuesUpdateMilestoneProps) {
	const { owner, repo, milestone_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/milestones/${milestone_number}`, {
		method: 'PATCH',
		...rest,
	});

	const json = await response.json();

	return json;
}