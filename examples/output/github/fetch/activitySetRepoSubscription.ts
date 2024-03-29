/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

/**
 * If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/rest/reference/activity#delete-a-repository-subscription) completely.
 */
export async function activitySetRepoSubscription(props: ActivitySetRepoSubscriptionProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, ActivitySetRepoSubscriptionRequestBody>({
		path: `/repos/${owner}/${repo}/subscription`,
		method: 'PUT',
		...rest,
	});
}
