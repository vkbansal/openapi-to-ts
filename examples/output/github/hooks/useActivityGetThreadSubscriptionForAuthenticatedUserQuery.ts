/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface ActivityGetThreadSubscriptionForAuthenticatedUserPathParams {
	thread_id: number;
}

export interface UseActivityGetThreadSubscriptionForAuthenticatedUserQueryProps
	extends ActivityGetThreadSubscriptionForAuthenticatedUserPathParams {}

/**
 * This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/rest/reference/activity#get-a-repository-subscription).
 *
 * Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
 */

export function useActivityGetThreadSubscriptionForAuthenticatedUserQuery(
	props: UseActivityGetThreadSubscriptionForAuthenticatedUserQueryProps,
) {
	const { thread_id } = props;

	return useQuery(['activity/get-thread-subscription-for-authenticated-user', thread_id]);
}
