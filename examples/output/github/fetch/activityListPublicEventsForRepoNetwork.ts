export interface ActivityListPublicEventsForRepoNetworkQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActivityListPublicEventsForRepoNetworkPathParams {
	owner: string;
	repo: string;
}

export interface ActivityListPublicEventsForRepoNetworkProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityListPublicEventsForRepoNetworkPathParams {
	queryParams: ActivityListPublicEventsForRepoNetworkQueryParams;
}

export async function activityListPublicEventsForRepoNetwork(
	props: ActivityListPublicEventsForRepoNetworkProps,
) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/networks/${owner}/${repo}/events`, {
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
