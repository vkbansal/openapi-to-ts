import { useQuery } from '@tanstack/react-query';

export interface IssuesCheckUserCanBeAssignedPathParams {
	owner: string;
	repo: string;
	assignee: string;
}

export interface UseIssuesCheckUserCanBeAssignedQueryProps
	extends IssuesCheckUserCanBeAssignedPathParams {}

export function useIssuesCheckUserCanBeAssignedQuery(
	props: UseIssuesCheckUserCanBeAssignedQueryProps,
) {
	const { owner, repo, assignee } = props;

	return useQuery(['issues/check-user-can-be-assigned', owner, repo, assignee]);
}
