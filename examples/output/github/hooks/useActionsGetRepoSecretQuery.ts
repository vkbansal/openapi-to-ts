import { useQuery } from '@tanstack/react-query';

export interface ActionsGetRepoSecretPathParams {
	owner: string;
	repo: string;
	secret_name: string;
}

export interface UseActionsGetRepoSecretQueryProps extends ActionsGetRepoSecretPathParams {}

export function useActionsGetRepoSecretQuery(props: UseActionsGetRepoSecretQueryProps) {
	const { owner, repo, secret_name } = props;

	return useQuery(['actions/get-repo-secret', owner, repo, secret_name]);
}
