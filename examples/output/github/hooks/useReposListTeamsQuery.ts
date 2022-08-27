/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposListTeamsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListTeamsQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseReposListTeamsQueryProps extends ReposListTeamsPathParams {
	queryParams: ReposListTeamsQueryParams;
}

export function useReposListTeamsQuery(props: UseReposListTeamsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-teams', owner, repo, queryParams]);
}
