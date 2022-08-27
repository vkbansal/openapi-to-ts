export interface GistsCheckIsStarredPathParams {
	gist_id: string;
}

export interface GistsCheckIsStarredProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsCheckIsStarredPathParams {}

export async function gistsCheckIsStarred(props: GistsCheckIsStarredProps) {
	const { gist_id, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/star`, {
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
