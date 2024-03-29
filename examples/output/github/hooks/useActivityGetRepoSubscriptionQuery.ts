/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseActivityGetRepoSubscriptionQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseActivityGetRepoSubscriptionQueryProps
	extends UseActivityGetRepoSubscriptionQueryPathParams {}

/**
 *
 */

export function useActivityGetRepoSubscriptionQuery(
	props: UseActivityGetRepoSubscriptionQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['activity/get-repo-subscription', owner, repo]);
}
