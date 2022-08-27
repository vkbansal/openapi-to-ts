import { useQuery } from '@tanstack/react-query';

export interface CodesOfConductGetForRepoPathParams {
	owner: string;
	repo: string;
}

export interface UseCodesOfConductGetForRepoQueryProps extends CodesOfConductGetForRepoPathParams {}

export function useCodesOfConductGetForRepoQuery(props: UseCodesOfConductGetForRepoQueryProps) {
	const { owner, repo } = props;

	return useQuery(['codes-of-conduct/get-for-repo', owner, repo]);
}
