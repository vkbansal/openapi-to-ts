import { useQuery } from '@tanstack/react-query';

export interface ChecksGetSuitePathParams {
	owner: string;
	repo: string;
	check_suite_id: number;
}

export interface UseChecksGetSuiteQueryProps extends ChecksGetSuitePathParams {}

export function useChecksGetSuiteQuery(props: UseChecksGetSuiteQueryProps) {
	const { owner, repo, check_suite_id } = props;

	return useQuery(['checks/get-suite', owner, repo, check_suite_id]);
}
