import { useQuery } from '@tanstack/react-query';

export interface IssuesListForOrgPathParams {
	org: string;
}

export interface IssuesListForOrgQueryParams {
	/**
	 * @default "assigned"
	 */
	filter?: 'all' | 'assigned' | 'created' | 'mentioned' | 'repos' | 'subscribed';
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	labels?: string;
	/**
	 * @default "created"
	 */
	sort?: 'comments' | 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListForOrgQueryProps extends IssuesListForOrgPathParams {
	queryParams: IssuesListForOrgQueryParams;
}

export function useIssuesListForOrgQuery(props: UseIssuesListForOrgQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['issues/list-for-org', org, queryParams]);
}
