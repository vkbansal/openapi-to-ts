/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActivityListNotificationsForAuthenticatedUserQueryParams {
	all?: boolean;
	participating?: boolean;
	since?: string;
	before?: string;
	per_page?: number;
	page?: number;
}

export interface ActivityListNotificationsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ActivityListNotificationsForAuthenticatedUserQueryParams;
}

export async function activityListNotificationsForAuthenticatedUser(
	props: ActivityListNotificationsForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/notifications`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}