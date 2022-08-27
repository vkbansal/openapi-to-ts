import { useQuery } from '@tanstack/react-query';

export interface ChecksListSuitesForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ChecksListSuitesForRefQueryParams {
	app_id?: number;
	check_name?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseChecksListSuitesForRefQueryProps extends ChecksListSuitesForRefPathParams {
	queryParams: ChecksListSuitesForRefQueryParams;
}

export function useChecksListSuitesForRefQuery(props: UseChecksListSuitesForRefQueryProps) {
	const { owner, repo, ref, queryParams } = props;

	return useQuery(['checks/list-suites-for-ref', owner, repo, ref, queryParams]);
}
