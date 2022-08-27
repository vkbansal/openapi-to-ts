import { useQuery } from '@tanstack/react-query';

export interface PullsCheckIfMergedPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface UsePullsCheckIfMergedQueryProps extends PullsCheckIfMergedPathParams {}

export function usePullsCheckIfMergedQuery(props: UsePullsCheckIfMergedQueryProps) {
	const { owner, repo, pull_number } = props;

	return useQuery(['pulls/check-if-merged', owner, repo, pull_number]);
}
