import { useQuery } from '@tanstack/react-query';

export interface ReposGetCollaboratorPermissionLevelPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface UseReposGetCollaboratorPermissionLevelQueryProps
	extends ReposGetCollaboratorPermissionLevelPathParams {}

export function useReposGetCollaboratorPermissionLevelQuery(
	props: UseReposGetCollaboratorPermissionLevelQueryProps,
) {
	const { owner, repo, username } = props;

	return useQuery(['repos/get-collaborator-permission-level', owner, repo, username]);
}
