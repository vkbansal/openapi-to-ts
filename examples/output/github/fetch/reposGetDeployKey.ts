export interface ReposGetDeployKeyPathParams {
	owner: string;
	repo: string;
	key_id: number;
}

export interface ReposGetDeployKeyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetDeployKeyPathParams {}

export async function reposGetDeployKey(props: ReposGetDeployKeyProps) {
	const { owner, repo, key_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/keys/${key_id}`, {
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
