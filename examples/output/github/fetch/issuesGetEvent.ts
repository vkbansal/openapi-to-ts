export interface IssuesGetEventPathParams {
	owner: string;
	repo: string;
	event_id: number;
}

export interface IssuesGetEventProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesGetEventPathParams {}

export async function issuesGetEvent(props: IssuesGetEventProps) {
	const { owner, repo, event_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/events/${event_id}`, {
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
