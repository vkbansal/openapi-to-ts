import { useQuery } from '@tanstack/react-query';

export interface ReposGetAllStatusCheckContextsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetAllStatusCheckContextsQueryProps
	extends ReposGetAllStatusCheckContextsPathParams {}

export function useReposGetAllStatusCheckContextsQuery(
	props: UseReposGetAllStatusCheckContextsQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-all-status-check-contexts', owner, repo, branch]);
}
