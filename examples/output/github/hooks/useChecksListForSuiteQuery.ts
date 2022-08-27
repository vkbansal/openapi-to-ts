import { useQuery } from '@tanstack/react-query';

export interface ChecksListForSuitePathParams {
	owner: string;
	repo: string;
	check_suite_id: number;
}

export interface ChecksListForSuiteQueryParams {
	check_name?: string;
	status?: 'completed' | 'in_progress' | 'queued';
	/**
	 * @default "latest"
	 */
	filter?: 'all' | 'latest';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseChecksListForSuiteQueryProps extends ChecksListForSuitePathParams {
	queryParams: ChecksListForSuiteQueryParams;
}

export function useChecksListForSuiteQuery(props: UseChecksListForSuiteQueryProps) {
	const { owner, repo, check_suite_id, queryParams } = props;

	return useQuery(['checks/list-for-suite', owner, repo, check_suite_id, queryParams]);
}
