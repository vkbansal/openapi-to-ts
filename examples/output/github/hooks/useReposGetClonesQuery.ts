/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseReposGetClonesQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetClonesQueryQueryParams {
	/**
	 * @default "day"
	 */
	per?: '' | 'day' | 'week';
}

export interface UseReposGetClonesQueryProps extends UseReposGetClonesQueryPathParams {
	queryParams: UseReposGetClonesQueryQueryParams;
}

/**
 * Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
 */

export function useReposGetClonesQuery(props: UseReposGetClonesQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/get-clones', owner, repo, queryParams]);
}
