import { useQuery } from '@tanstack/react-query';

export interface ActivityGetThreadSubscriptionForAuthenticatedUserPathParams {
	thread_id: number;
}

export interface UseActivityGetThreadSubscriptionForAuthenticatedUserQueryProps
	extends ActivityGetThreadSubscriptionForAuthenticatedUserPathParams {}

export function useActivityGetThreadSubscriptionForAuthenticatedUserQuery(
	props: UseActivityGetThreadSubscriptionForAuthenticatedUserQueryProps,
) {
	const { thread_id } = props;

	return useQuery(['activity/get-thread-subscription-for-authenticated-user', thread_id]);
}
