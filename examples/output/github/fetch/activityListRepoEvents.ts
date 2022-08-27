/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActivityListRepoEventsQueryParams {
	per_page?: number;
	page?: number;
}

export interface ActivityListRepoEventsPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListRepoEventsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListRepoEventsPathParams {
	queryParams: ActivityListRepoEventsQueryParams;
}

export async function activityListRepoEvents(props: ActivityListRepoEventsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/events`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
