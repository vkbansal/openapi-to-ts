import { useQuery } from '@tanstack/react-query';

export interface PullsListPathParams {
	owner: string;
	repo: string;
}

export interface PullsListQueryParams {
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	head?: string;
	base?: string;
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'long-running' | 'popularity' | 'updated';
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

export interface UsePullsListQueryProps extends PullsListPathParams {
	queryParams: PullsListQueryParams;
}

export function usePullsListQuery(props: UsePullsListQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['pulls/list', owner, repo, queryParams]);
}
