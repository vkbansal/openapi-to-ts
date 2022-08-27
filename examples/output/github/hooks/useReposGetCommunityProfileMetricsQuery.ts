import { useQuery } from '@tanstack/react-query';

export interface ReposGetCommunityProfileMetricsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetCommunityProfileMetricsQueryProps
	extends ReposGetCommunityProfileMetricsPathParams {}

export function useReposGetCommunityProfileMetricsQuery(
	props: UseReposGetCommunityProfileMetricsQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['repos/get-community-profile-metrics', owner, repo]);
}
