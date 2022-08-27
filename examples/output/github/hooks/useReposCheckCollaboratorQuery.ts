import { useQuery } from '@tanstack/react-query';

export interface ReposCheckCollaboratorPathParams {
	owner: string;
	repo: string;
	username: string;
}

export interface UseReposCheckCollaboratorQueryProps extends ReposCheckCollaboratorPathParams {}

export function useReposCheckCollaboratorQuery(props: UseReposCheckCollaboratorQueryProps) {
	const { owner, repo, username } = props;

	return useQuery(['repos/check-collaborator', owner, repo, username]);
}
