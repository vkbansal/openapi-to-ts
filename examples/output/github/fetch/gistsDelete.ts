export interface GistsDeletePathParams {
	gist_id: string;
}

export interface GistsDeleteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsDeletePathParams {}

export async function gistsDelete(props: GistsDeleteProps) {
	const { gist_id, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}`, {
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
