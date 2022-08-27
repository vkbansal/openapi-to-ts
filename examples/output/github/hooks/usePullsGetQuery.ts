import { useQuery } from '@tanstack/react-query';

export interface PullsGetPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface UsePullsGetQueryProps extends PullsGetPathParams {}

export function usePullsGetQuery(props: UsePullsGetQueryProps) {
	const { owner, repo, pull_number } = props;

	return useQuery(['pulls/get', owner, repo, pull_number]);
}
