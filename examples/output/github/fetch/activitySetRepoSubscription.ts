export interface ActivitySetRepoSubscriptionPathParams {
	owner: string;
	repo: string;
}

export interface ActivitySetRepoSubscriptionRequestBody {
	/**
	 * Determines if all notifications should be blocked from this repository.
	 */
	ignored?: boolean;
	/**
	 * Determines if notifications should be received from this repository.
	 */
	subscribed?: boolean;
}

export interface ActivitySetRepoSubscriptionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActivitySetRepoSubscriptionPathParams {
	body: ActivitySetRepoSubscriptionRequestBody;
}

export async function activitySetRepoSubscription(props: ActivitySetRepoSubscriptionProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/subscription`, {
		method: 'PUT',
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
