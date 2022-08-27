import { useQuery } from '@tanstack/react-query';

export interface IssuesGetPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface UseIssuesGetQueryProps extends IssuesGetPathParams {}

export function useIssuesGetQuery(props: UseIssuesGetQueryProps) {
	const { owner, repo, issue_number } = props;

	return useQuery(['issues/get', owner, repo, issue_number]);
}
