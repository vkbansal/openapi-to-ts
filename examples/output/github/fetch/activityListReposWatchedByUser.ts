/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActivityListReposWatchedByUserQueryParams {
	per_page?: number;
	page?: number;
}

export interface ActivityListReposWatchedByUserPathParams {
	username: string;
}

export interface ActivityListReposWatchedByUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListReposWatchedByUserPathParams {
	queryParams: ActivityListReposWatchedByUserQueryParams;
}

export async function activityListReposWatchedByUser(props: ActivityListReposWatchedByUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/subscriptions`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}