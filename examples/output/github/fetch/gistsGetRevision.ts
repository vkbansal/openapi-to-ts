export interface GistsGetRevisionPathParams {
	gist_id: string;
	sha: string;
}

export interface GistsGetRevisionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsGetRevisionPathParams {}

export async function gistsGetRevision(props: GistsGetRevisionProps) {
	const { gist_id, sha, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/${sha}`, {
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
