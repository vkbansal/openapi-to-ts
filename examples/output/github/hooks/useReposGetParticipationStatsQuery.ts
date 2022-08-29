/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface ReposGetParticipationStatsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetParticipationStatsQueryProps
	extends ReposGetParticipationStatsPathParams {}

/**
 * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
 *
 * The array order is oldest week (index 0) to most recent week.
 */

export function useReposGetParticipationStatsQuery(props: UseReposGetParticipationStatsQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-participation-stats', owner, repo]);
}
