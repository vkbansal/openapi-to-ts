/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposGetAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetAccessRestrictionsQueryProps
	extends ReposGetAccessRestrictionsPathParams {}

export function useReposGetAccessRestrictionsQuery(props: UseReposGetAccessRestrictionsQueryProps) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-access-restrictions', owner, repo, branch]);
}