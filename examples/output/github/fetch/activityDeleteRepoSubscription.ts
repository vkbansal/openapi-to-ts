export interface ActivityDeleteRepoSubscriptionPathParams {
	owner: string;
	repo: string;
}

export interface ActivityDeleteRepoSubscriptionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivityDeleteRepoSubscriptionPathParams {}

export async function activityDeleteRepoSubscription(props: ActivityDeleteRepoSubscriptionProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/subscription`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
