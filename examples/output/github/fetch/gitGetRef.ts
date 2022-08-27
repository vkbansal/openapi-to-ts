export interface GitGetRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface GitGetRefProps extends Omit<RequestInit, 'method' | 'body'>, GitGetRefPathParams {}

export async function gitGetRef(props: GitGetRefProps) {
	const { owner, repo, ref, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/ref/${ref}`, {
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
