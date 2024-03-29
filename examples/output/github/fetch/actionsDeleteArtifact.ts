/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ActionsDeleteArtifactPathParams {
	owner: string;
	repo: string;
	artifact_id: number;
}

export interface ActionsDeleteArtifactProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteArtifactPathParams {}

/**
 * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 */
export async function actionsDeleteArtifact(props: ActionsDeleteArtifactProps) {
	const { owner, repo, artifact_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/actions/artifacts/${artifact_id}`,
		method: 'DELETE',
		...rest,
	});
}
