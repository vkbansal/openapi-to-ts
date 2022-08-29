/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface UsersFollowPathParams {
	username: string;
}

export interface UsersFollowProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersFollowPathParams {}

/**
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 *
 * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
 */
export async function usersFollow(props: UsersFollowProps) {
	const { username, ...rest } = props;

	const response = await fetch(`/user/following/${username}`, {
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
