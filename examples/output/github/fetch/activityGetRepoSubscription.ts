export interface ActivityGetRepoSubscriptionPathParams {
	owner: string;
	repo: string;
}

export interface ActivityGetRepoSubscriptionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityGetRepoSubscriptionPathParams {}

export async function activityGetRepoSubscription(props: ActivityGetRepoSubscriptionProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/subscription`, {
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
