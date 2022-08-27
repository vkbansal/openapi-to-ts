export interface GistsForkPathParams {
	gist_id: string;
}

export interface GistsForkProps extends Omit<RequestInit, 'method' | 'body'>, GistsForkPathParams {}

export async function gistsFork(props: GistsForkProps) {
	const { gist_id, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/forks`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
