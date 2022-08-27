export interface ActionsGetRepoPublicKeyPathParams {
	owner: string;
	repo: string;
}

export interface ActionsGetRepoPublicKeyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetRepoPublicKeyPathParams {}

export async function actionsGetRepoPublicKey(props: ActionsGetRepoPublicKeyProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/secrets/public-key`, {
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
