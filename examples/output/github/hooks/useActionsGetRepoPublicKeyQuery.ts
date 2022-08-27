import { useQuery } from '@tanstack/react-query';

export interface ActionsGetRepoPublicKeyPathParams {
	owner: string;
	repo: string;
}

export interface UseActionsGetRepoPublicKeyQueryProps extends ActionsGetRepoPublicKeyPathParams {}

export function useActionsGetRepoPublicKeyQuery(props: UseActionsGetRepoPublicKeyQueryProps) {
	const { owner, repo } = props;

	return useQuery(['actions/get-repo-public-key', owner, repo]);
}
