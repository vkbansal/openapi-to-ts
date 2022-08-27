import { useQuery } from '@tanstack/react-query';

export interface ChecksListForRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface ChecksListForRefQueryParams {
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
	app_id?: number;
}

export interface UseChecksListForRefQueryProps extends ChecksListForRefPathParams {
	queryParams: ChecksListForRefQueryParams;
}

export function useChecksListForRefQuery(props: UseChecksListForRefQueryProps) {
	const { owner, repo, ref, queryParams } = props;

	return useQuery(['checks/list-for-ref', owner, repo, ref, queryParams]);
}
