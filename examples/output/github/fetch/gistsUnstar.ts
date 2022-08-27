export interface GistsUnstarPathParams {
	gist_id: string;
}

export interface GistsUnstarProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GistsUnstarPathParams {}

export async function gistsUnstar(props: GistsUnstarProps) {
	const { gist_id, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/star`, {
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
