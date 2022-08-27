/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface LogoutUserProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function logoutUser(props: LogoutUserProps) {
	const { ...rest } = props;

	const response = await fetch(`/user/logout`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
