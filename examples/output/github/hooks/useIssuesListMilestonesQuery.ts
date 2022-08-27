import { useQuery } from '@tanstack/react-query';

export interface IssuesListMilestonesPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListMilestonesQueryParams {
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	/**
	 * @default "due_on"
	 */
	sort?: 'completeness' | 'due_on';
	/**
	 * @default "asc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListMilestonesQueryProps extends IssuesListMilestonesPathParams {
	queryParams: IssuesListMilestonesQueryParams;
}

export function useIssuesListMilestonesQuery(props: UseIssuesListMilestonesQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-milestones', owner, repo, queryParams]);
}
