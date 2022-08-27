import { useQuery } from '@tanstack/react-query';

export interface ActivityGetRepoSubscriptionPathParams {
	owner: string;
	repo: string;
}

export interface UseActivityGetRepoSubscriptionQueryProps
	extends ActivityGetRepoSubscriptionPathParams {}

export function useActivityGetRepoSubscriptionQuery(
	props: UseActivityGetRepoSubscriptionQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['activity/get-repo-subscription', owner, repo]);
}
