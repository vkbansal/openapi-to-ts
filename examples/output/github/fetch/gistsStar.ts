/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface GistsStarPathParams {
	gist_id: string;
}

export interface GistsStarProps extends Omit<RequestInit, 'method' | 'body'>, GistsStarPathParams {}

/**
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 */
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
