import { useQuery } from '@tanstack/react-query';

export interface ActionsDownloadArtifactPathParams {
	owner: string;
	repo: string;
	artifact_id: number;
	archive_format: string;
}

export interface UseActionsDownloadArtifactQueryProps extends ActionsDownloadArtifactPathParams {}

export function useActionsDownloadArtifactQuery(props: UseActionsDownloadArtifactQueryProps) {
	const { owner, repo, artifact_id, archive_format } = props;

	return useQuery(['actions/download-artifact', owner, repo, artifact_id, archive_format]);
}
