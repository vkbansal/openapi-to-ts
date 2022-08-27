/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface UsersAddEmailForAuthenticatedProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function usersAddEmailForAuthenticated(props: UsersAddEmailForAuthenticatedProps) {
	const { ...rest } = props;

	const response = await fetch(`/user/emails`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}