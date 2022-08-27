import { useQuery } from '@tanstack/react-query';

export interface IssuesListLabelsForMilestonePathParams {
	owner: string;
	repo: string;
	milestone_number: number;
}

export interface IssuesListLabelsForMilestoneQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListLabelsForMilestoneQueryProps
	extends IssuesListLabelsForMilestonePathParams {
	queryParams: IssuesListLabelsForMilestoneQueryParams;
}

export function useIssuesListLabelsForMilestoneQuery(
	props: UseIssuesListLabelsForMilestoneQueryProps,
) {
	const { owner, repo, milestone_number, queryParams } = props;

	return useQuery(['issues/list-labels-for-milestone', owner, repo, milestone_number, queryParams]);
}
