export interface ActionsGetArtifactPathParams {
	owner: string;
	repo: string;
	artifact_id: number;
}

export interface ActionsGetArtifactProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetArtifactPathParams {}

export async function actionsGetArtifact(props: ActionsGetArtifactProps) {
	const { owner, repo, artifact_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/artifacts/${artifact_id}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
