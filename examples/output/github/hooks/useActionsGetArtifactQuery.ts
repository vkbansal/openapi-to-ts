/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface ActionsGetArtifactPathParams {
	owner: string;
	repo: string;
	artifact_id: number;
}

export interface UseActionsGetArtifactQueryProps extends ActionsGetArtifactPathParams {}

/**
 * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 */

export function useActionsGetArtifactQuery(props: UseActionsGetArtifactQueryProps) {
	const { owner, repo, artifact_id } = props;

	return useQuery(['actions/get-artifact', owner, repo, artifact_id]);
}
