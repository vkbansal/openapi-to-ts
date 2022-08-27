import { useQuery } from '@tanstack/react-query';

export interface ActionsGetArtifactPathParams {
	owner: string;
	repo: string;
	artifact_id: number;
}

export interface UseActionsGetArtifactQueryProps extends ActionsGetArtifactPathParams {}

export function useActionsGetArtifactQuery(props: UseActionsGetArtifactQueryProps) {
	const { owner, repo, artifact_id } = props;

	return useQuery(['actions/get-artifact', owner, repo, artifact_id]);
}
