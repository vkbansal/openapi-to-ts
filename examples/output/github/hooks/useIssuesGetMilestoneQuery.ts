import { useQuery } from '@tanstack/react-query';

export interface IssuesGetMilestonePathParams {
	owner: string;
	repo: string;
	milestone_number: number;
}

export interface UseIssuesGetMilestoneQueryProps extends IssuesGetMilestonePathParams {}

export function useIssuesGetMilestoneQuery(props: UseIssuesGetMilestoneQueryProps) {
	const { owner, repo, milestone_number } = props;

	return useQuery(['issues/get-milestone', owner, repo, milestone_number]);
}
