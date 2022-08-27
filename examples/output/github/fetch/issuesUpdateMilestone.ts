export interface IssuesUpdateMilestonePathParams {
	owner: string;
	repo: string;
	milestone_number: number;
}

export interface IssuesUpdateMilestoneRequestBody {
	/**
	 * A description of the milestone.
	 */
	description?: string;
	/**
	 * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
	 */
	due_on?: string;
	/**
	 * The state of the milestone. Either `open` or `closed`.
	 * @default "open"
	 */
	state?: 'closed' | 'open';
	/**
	 * The title of the milestone.
	 */
	title?: string;
}

export interface IssuesUpdateMilestoneProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesUpdateMilestonePathParams {
	body: IssuesUpdateMilestoneRequestBody;
}

export async function issuesUpdateMilestone(props: IssuesUpdateMilestoneProps) {
	const { owner, repo, milestone_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/milestones/${milestone_number}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
