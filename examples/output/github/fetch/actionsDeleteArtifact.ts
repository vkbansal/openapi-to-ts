export interface ActionsDeleteArtifactPathParams {
	owner: string;
	repo: string;
	artifact_id: number;
}

export interface ActionsDeleteArtifactProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteArtifactPathParams {}

export async function actionsDeleteArtifact(props: ActionsDeleteArtifactProps) {
	const { owner, repo, artifact_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/artifacts/${artifact_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
