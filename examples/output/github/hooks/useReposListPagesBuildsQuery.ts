/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposListPagesBuildsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListPagesBuildsQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseReposListPagesBuildsQueryProps extends ReposListPagesBuildsPathParams {
	queryParams: ReposListPagesBuildsQueryParams;
}

export function useReposListPagesBuildsQuery(props: UseReposListPagesBuildsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-pages-builds', owner, repo, queryParams]);
}