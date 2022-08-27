export interface ReposDeleteDeployKeyPathParams {
	owner: string;
	repo: string;
	key_id: number;
}

export interface ReposDeleteDeployKeyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteDeployKeyPathParams {}

export async function reposDeleteDeployKey(props: ReposDeleteDeployKeyProps) {
	const { owner, repo, key_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/keys/${key_id}`, {
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
