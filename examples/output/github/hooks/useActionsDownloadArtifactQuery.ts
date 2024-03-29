/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseActionsDownloadArtifactQueryPathParams {
	owner: string;
	repo: string;
	artifact_id: number;
	archive_format: string;
}

export interface UseActionsDownloadArtifactQueryProps
	extends UseActionsDownloadArtifactQueryPathParams {}

/**
 * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
 * the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
 * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
 * GitHub Apps must have the `actions:read` permission to use this endpoint.
 */

export function useActionsDownloadArtifactQuery(props: UseActionsDownloadArtifactQueryProps) {
	const { owner, repo, artifact_id, archive_format } = props;

	return useQuery(['actions/download-artifact', owner, repo, artifact_id, archive_format]);
}
