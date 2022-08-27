export interface IssuesCreateMilestonePathParams {
	owner: string;
	repo: string;
}

export interface IssuesCreateMilestoneRequestBody {
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
	title: string;
}

export interface IssuesCreateMilestoneProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesCreateMilestonePathParams {
	body: IssuesCreateMilestoneRequestBody;
}

export async function issuesCreateMilestone(props: IssuesCreateMilestoneProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/milestones`, {
		method: 'POST',
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
