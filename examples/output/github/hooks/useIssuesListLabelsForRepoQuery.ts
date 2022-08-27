import { useQuery } from '@tanstack/react-query';

export interface IssuesListLabelsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListLabelsForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListLabelsForRepoQueryProps extends IssuesListLabelsForRepoPathParams {
	queryParams: IssuesListLabelsForRepoQueryParams;
}

export function useIssuesListLabelsForRepoQuery(props: UseIssuesListLabelsForRepoQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-labels-for-repo', owner, repo, queryParams]);
}
