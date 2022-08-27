export interface GitDeleteRefPathParams {
	owner: string;
	repo: string;
	ref: string;
}

export interface GitDeleteRefProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitDeleteRefPathParams {}

export async function gitDeleteRef(props: GitDeleteRefProps) {
	const { owner, repo, ref, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/refs/${ref}`, {
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
