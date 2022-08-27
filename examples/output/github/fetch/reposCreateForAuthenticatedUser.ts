/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposCreateForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function reposCreateForAuthenticatedUser(props: ReposCreateForAuthenticatedUserProps) {
	const { ...rest } = props;

	const response = await fetch(`/user/repos`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
