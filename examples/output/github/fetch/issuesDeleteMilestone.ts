/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface IssuesDeleteMilestonePathParams {
	owner: string;
	repo: string;
	milestone_number: number;
}

export interface IssuesDeleteMilestoneProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesDeleteMilestonePathParams {}

/**
 *
 */
export async function issuesDeleteMilestone(props: IssuesDeleteMilestoneProps) {
	const { owner, repo, milestone_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/milestones/${milestone_number}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
