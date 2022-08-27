export interface GistsGetPathParams {
	gist_id: string;
}

export interface GistsGetProps extends Omit<RequestInit, 'method' | 'body'>, GistsGetPathParams {}

export async function gistsGet(props: GistsGetProps) {
	const { gist_id, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}`, {
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
