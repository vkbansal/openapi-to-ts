/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposListTagsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListTagsQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseReposListTagsQueryProps extends ReposListTagsPathParams {
	queryParams: ReposListTagsQueryParams;
}

export function useReposListTagsQuery(props: UseReposListTagsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-tags', owner, repo, queryParams]);
}