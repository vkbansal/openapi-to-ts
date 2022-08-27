import { useQuery } from '@tanstack/react-query';

export interface ChecksListAnnotationsPathParams {
	owner: string;
	repo: string;
	check_run_id: number;
}

export interface ChecksListAnnotationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseChecksListAnnotationsQueryProps extends ChecksListAnnotationsPathParams {
	queryParams: ChecksListAnnotationsQueryParams;
}

export function useChecksListAnnotationsQuery(props: UseChecksListAnnotationsQueryProps) {
	const { owner, repo, check_run_id, queryParams } = props;

	return useQuery(['checks/list-annotations', owner, repo, check_run_id, queryParams]);
}
