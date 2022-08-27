import { useQuery } from '@tanstack/react-query';

export interface IssuesListAssigneesPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListAssigneesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListAssigneesQueryProps extends IssuesListAssigneesPathParams {
	queryParams: IssuesListAssigneesQueryParams;
}

export function useIssuesListAssigneesQuery(props: UseIssuesListAssigneesQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-assignees', owner, repo, queryParams]);
}
