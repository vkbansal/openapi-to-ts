export interface ActionsDownloadArtifactPathParams {
	owner: string;
	repo: string;
	artifact_id: number;
	archive_format: string;
}

export interface ActionsDownloadArtifactProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDownloadArtifactPathParams {}

export async function actionsDownloadArtifact(props: ActionsDownloadArtifactProps) {
	const { owner, repo, artifact_id, archive_format, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/actions/artifacts/${artifact_id}/${archive_format}`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
