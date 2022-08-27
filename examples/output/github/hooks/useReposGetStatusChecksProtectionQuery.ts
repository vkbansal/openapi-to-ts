import { useQuery } from '@tanstack/react-query';

export interface ReposGetStatusChecksProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface UseReposGetStatusChecksProtectionQueryProps
	extends ReposGetStatusChecksProtectionPathParams {}

export function useReposGetStatusChecksProtectionQuery(
	props: UseReposGetStatusChecksProtectionQueryProps,
) {
	const { owner, repo, branch } = props;

	return useQuery(['repos/get-status-checks-protection', owner, repo, branch]);
}
