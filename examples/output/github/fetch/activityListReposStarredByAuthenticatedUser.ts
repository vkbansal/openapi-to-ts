/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActivityListReposStarredByAuthenticatedUserQueryParams {
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	per_page?: number;
	page?: number;
}

export interface ActivityListReposStarredByAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ActivityListReposStarredByAuthenticatedUserQueryParams;
}

export async function activityListReposStarredByAuthenticatedUser(
	props: ActivityListReposStarredByAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/starred`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
