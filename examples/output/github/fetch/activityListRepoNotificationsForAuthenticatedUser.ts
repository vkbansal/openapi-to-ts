export interface ActivityListRepoNotificationsForAuthenticatedUserQueryParams {
	all?: boolean;
	participating?: boolean;
	since?: string;
	before?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListRepoNotificationsForAuthenticatedUserPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListRepoNotificationsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListRepoNotificationsForAuthenticatedUserPathParams {
	queryParams: ActivityListRepoNotificationsForAuthenticatedUserQueryParams;
}

export async function activityListRepoNotificationsForAuthenticatedUser(
	props: ActivityListRepoNotificationsForAuthenticatedUserProps,
) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/notifications`, {
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
