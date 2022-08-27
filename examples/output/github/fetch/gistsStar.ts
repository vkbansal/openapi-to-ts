export interface GistsStarPathParams {
	gist_id: string;
}

export interface GistsStarProps extends Omit<RequestInit, 'method' | 'body'>, GistsStarPathParams {}

export async function gistsStar(props: GistsStarProps) {
	const { gist_id, ...rest } = props;

	const response = await fetch(`/gists/${gist_id}/star`, {
		method: 'PUT',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
