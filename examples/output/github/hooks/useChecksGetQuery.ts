import { useQuery } from '@tanstack/react-query';

export interface ChecksGetPathParams {
	owner: string;
	repo: string;
	check_run_id: number;
}

export interface UseChecksGetQueryProps extends ChecksGetPathParams {}

export function useChecksGetQuery(props: UseChecksGetQueryProps) {
	const { owner, repo, check_run_id } = props;

	return useQuery(['checks/get', owner, repo, check_run_id]);
}
