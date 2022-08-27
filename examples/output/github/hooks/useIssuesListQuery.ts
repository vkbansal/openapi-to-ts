import { useQuery } from '@tanstack/react-query';

export interface IssuesListQueryParams {
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
	collab?: boolean;
	orgs?: boolean;
	owned?: boolean;
	pulls?: boolean;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListQueryProps {
	queryParams: IssuesListQueryParams;
}

export function useIssuesListQuery(props: UseIssuesListQueryProps) {
	const { queryParams } = props;

	return useQuery(['issues/list', queryParams]);
}
