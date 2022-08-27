import { useQuery } from '@tanstack/react-query';

export interface IssuesListForAuthenticatedUserQueryParams {
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

export interface UseIssuesListForAuthenticatedUserQueryProps {
	queryParams: IssuesListForAuthenticatedUserQueryParams;
}

export function useIssuesListForAuthenticatedUserQuery(
	props: UseIssuesListForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['issues/list-for-authenticated-user', queryParams]);
}
